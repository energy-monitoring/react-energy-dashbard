import {InterfaceGeoJson, TypeCountryKey, TypeDataSource, TypeFeature} from "../types/types";
import {countryMap} from "../config/countries";
import {cities, TypeCity} from "../config/cities";
import {CoordinateConverter} from "./CoordinateConverter";
import {countriesDataLow} from "../data/geoJsonLow";
import {countriesDataMedium} from "../data/geoJsonMedium";

interface DataConverterOptions {

}

/**
 * Class DataConverter.
 *
 * @author Björn Hempel <bjoern@hempel.li>
 * @version 0.1.0 (2024-07-14)
 * @since 0.1.0 (2024-07-14) First version.
 */
export class DataConverter {

    private coordinateConverter: CoordinateConverter = new CoordinateConverter();

    private readonly propertyCountrySelectedFill: string = '#c0e0c0';

    private readonly propertyCountrySelectedStroke: string = '#a0a0a0';

    private readonly propertyCountrySelectedStrokeWidth: number = .1;

    private readonly propertiesCityFill: string = '#008000';

    private readonly propertiesCityStroke: string = '#008000';

    private readonly propertiesCityStrokeWidth: number = 0.;

    /**
     * The constructor of WorldMapSvg.
     *
     * @param options
     */
    constructor(options: DataConverterOptions = {}) { }

    /**
     * Returns the id from given feature.
     *
     * @param feature
     */
    public getId(feature: TypeFeature): string {
        let id: string|null = null;

        if (feature.hasOwnProperty('id')) {
            id = feature.id ?? null;
        }

        if (feature.properties.hasOwnProperty('wb_a2')) {
            id = feature.properties.wb_a2 ?? null;
        }

        if (typeof id !== 'string') {
            throw new Error('Can not find feature.id or feature.properties.wb_a2 to determine the country id.');
        }

        return id;
    }

    /**
     * Adds additional config to given country.
     *
     * @param geoJson
     * @param country
     */
    private addConfigToSelectedCountry(geoJson: InterfaceGeoJson, country: string|null): InterfaceGeoJson {
        const convertedFeatures = geoJson.features.map(feature => {
            let properties = {
                ...feature.properties
            };

            /* Adds additional configuration to given country. */
            if (country === feature.id) {
                properties.fill = this.propertyCountrySelectedFill;
                properties.stroke = this.propertyCountrySelectedStroke;
                properties["stroke-width"] = this.propertyCountrySelectedStrokeWidth;
            }

            return {
                ...feature,
                properties
            };
        });

        return {
            ...geoJson,
            features: convertedFeatures
        };
    }

    /**
     * Adds ids and names to geoJson object.
     *
     * @param geoJson
     * @private
     */
    private addIdsAndNames(geoJson: InterfaceGeoJson): InterfaceGeoJson {
        const convertedFeatures = geoJson.features.map(feature => {
            let id = this.getId(feature);

            let convertedFeature = {
                ...feature,
                id: id
            };

            const country = id.toLowerCase();

            if (!countryMap.hasOwnProperty(country)) {
                return convertedFeature;
            }

            convertedFeature.name = countryMap[country].name;

            return convertedFeature;
        });

        return {
            ...geoJson,
            features: convertedFeatures
        };
    }

    /**
     * Returns a feature from given city.
     *
     * @param city
     * @private
     */
    private getFeatureFromCity(city: TypeCity): TypeFeature {
        return {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: city.coordinate
            },
            properties: {
                name: city.name,
                fill: this.propertiesCityFill,
                stroke: this.propertiesCityStroke,
                "stroke-width": this.propertiesCityStrokeWidth
            },
            name: city.name,
            id: `Place-${city.name}`
        };
    }

    /**
     * Adds additional cities from cities.
     *
     * @param geoJson
     * @see cities
     */
    private addCities(geoJson: InterfaceGeoJson): InterfaceGeoJson {
        if (geoJson.citiesAdded) {
            return geoJson;
        }

        cities.forEach((city) => {
            geoJson.features.push(this.getFeatureFromCity(city));
        });

        geoJson.citiesAdded = true;

        return geoJson;
    }

    /**
     * Returns the prepared geoJson data according to given country.
     *
     * @param geoJson
     * @param country
     * @private
     */
    private prepareGeoJsonData(geoJson: InterfaceGeoJson, country: string|null): InterfaceGeoJson {
        return this.addConfigToSelectedCountry(
            this.addIdsAndNames(
                this.coordinateConverter.convertToMercatorProjection(
                    this.addCities(geoJson)
                )
            ),
            country
        );
    }

    /**
     * Return the prepared data according to given datasource.
     *
     * @param dataSource
     * @param countryKey
     * @private
     */
    getPreparedData(dataSource: TypeDataSource, countryKey: TypeCountryKey): InterfaceGeoJson {
        if (dataSource === 'low') {
            return this.prepareGeoJsonData(countriesDataLow, countryKey);
        }

        if (dataSource === 'medium') {
            return this.prepareGeoJsonData(countriesDataMedium, countryKey);
        }

        throw new Error('Unsupported datasource given');
    }
}