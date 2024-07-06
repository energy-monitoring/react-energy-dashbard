export const countries = [
    { code: "de", name: "Deutschland" },
    { code: "ch", name: "Schweiz" },
    { code: "eu", name: "Europäische Union" },
    { code: "all", name: "Europa" },
    { code: "at", name: "Österreich" },
    { code: "be", name: "Belgien" },
    { code: "bg", name: "Bulgarien" },
    { code: "cz", name: "Tschechische Republik" },
    { code: "dk", name: "Dänemark" },
    { code: "ee", name: "Estland" },
    { code: "es", name: "Spanien" },
    { code: "fi", name: "Finnland" },
    { code: "fr", name: "Frankreich" },
    { code: "ge", name: "Georgien" },
    { code: "gr", name: "Griechenland" },
    { code: "hr", name: "Kroatien" },
    { code: "hu", name: "Ungarn" },
    { code: "ie", name: "Irland" },
    { code: "lt", name: "Litauen" },
    { code: "lu", name: "Luxemburg" },
    { code: "lv", name: "Lettland" },
    { code: "me", name: "Montenegro" },
    { code: "mk", name: "Nordmazedonien" },
    { code: "nl", name: "Niederlande" },
    { code: "no", name: "Norwegen" },
    { code: "pl", name: "Polen" },
    { code: "pt", name: "Portugal" },
    { code: "ro", name: "Rumänien" },
    { code: "rs", name: "Serbien" },
    { code: "se", name: "Schweden" },
    { code: "sk", name: "Slowakische Republik" },
    { code: "xk", name: "Kosovo" },
].sort((a, b) => a.name.localeCompare(b.name));

// export const countries = [
//     // { code: "al", name: "Albania" },
//     // { code: "am", name: "Armenia" },
//     // { code: "az", name: "Azerbaijan" },
//     // { code: "ba", name: "Bosnia-Herzegovina" },
//     // { code: "by", name: "Belarus" },
//     // { code: "cy", name: "Cyprus" },
//     // { code: "it", name: "Italy" },
//     // { code: "md", name: "Moldova" },
//     // { code: "mt", name: "Malta" },
//     // { code: "nie", name: "North Ireland" },
//     // { code: "ru", name: "Russia" },
//     // { code: "sl", name: "Slovenia" },
//     // { code: "tr", name: "Turkey" },
//     // { code: "ua", name: "Ukraine" },
//     // { code: "uk", name: "United Kingdom" },
// ];

export const positions: {[key: string]: {latitude: number, longitude: number, name: string, distance: number}} = {
    "de": { "latitude": 51.1333, "longitude": 10.4167, name: "Deutschland", distance: 15 },
    "ch": { "latitude": 46.8, "longitude": 8.2, name: "Schweiz", distance: 60 },
    "eu": { "latitude": 54.8985, "longitude": 25.3015, name: "Europa", distance: 60 },
    "all": { "latitude": 47.2, "longitude": 13.2, name: "Österreich", distance: 60 },
    "at": { "latitude": 47.2, "longitude": 13.2, name: "Österreich", distance: 15 },
    "be": { "latitude": 50.6403, "longitude": 4.6667, name: "Belgien", distance: 60 },
    "bg": { "latitude": 42.7833, "longitude": 25.2333, name: "Bulgarien", distance: 60 },
    "cz": { "latitude": 49.7395, "longitude": 15.3381, name: "Tschechien", distance: 60 },
    "dk": { "latitude": 55.4840, "longitude": 11.5780, "name": "Dänemark", distance: 60 },
    "ee": { "latitude": 58.5953, "longitude": 25.0136, "name": "Estland", distance: 60 },
    "es": { "latitude": 40.4637, "longitude": -3.7492, "name": "Spanien", distance: 15 },
    "fi": { "latitude": 61.9241, "longitude": 25.7482, "name": "Finnland", distance: 60 },
    "fr": { "latitude": 46.6034, "longitude": 1.8883, "name": "Frankreich", distance: 60 },
    "ge": { "latitude": 42.3154, "longitude": 43.3569, "name": "Georgien", distance: 60 },
    "gr": { "latitude": 39.0742, "longitude": 21.8243, "name": "Griechenland", distance: 60 },
    "hr": { "latitude": 45.1000, "longitude": 15.2000, "name": "Kroatien", distance: 15 },
    "hu": { "latitude": 47.1625, "longitude": 19.5033, "name": "Ungarn", distance: 15 },
    "ie": { "latitude": 53.1424, "longitude": -7.6921, "name": "Irland", distance: 60 },
    "lu": { "latitude": 49.8153, "longitude": 6.1296, "name": "Luxemburg", distance: 15 },
    "lv": { "latitude": 56.8796, "longitude": 24.6032, "name": "Lettland", distance: 60 },
    "me": { "latitude": 42.7087, "longitude": 19.3744, "name": "Montenegro", distance: 60 },
    "mk": { "latitude": 41.6086, "longitude": 21.7453, "name": "Nordmazedonien", distance: 60 },
    "nl": { "latitude": 52.1326, "longitude": 5.2913, "name": "Niederlande", distance: 15 },
    "no": { "latitude": 60.4720, "longitude": 8.4689, "name": "Norwegen", distance: 60 },
    "pl": { "latitude": 51.9194, "longitude": 19.1451, "name": "Polen", distance: 60 },
    "pt": { "latitude": 39.3999, "longitude": -8.2245, "name": "Portugal", distance: 60 },
    "ro": { "latitude": 45.9432, "longitude": 24.9668, "name": "Rumänien", distance: 15 },
    "rs": { "latitude": 44.0165, "longitude": 21.0059, "name": "Serbien", distance: 60 },
    "se": { "latitude": 60.1282, "longitude": 18.6435, "name": "Schweden", distance: 60 },
    "sk": { "latitude": 48.6690, "longitude": 19.6990, "name": "Slowakei", distance: 60 },
    "xk": { "latitude": 42.6026, "longitude": 20.9020, "name": "Kosovo", distance: 60 }
};

export const countriesDayAheadPrice = [
    { code: 'BE', name: 'Belgium' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'DE-LU', name: 'Germany, Luxembourg' },
    { code: 'DE-AT-LU', name: 'Germany, Austria, Luxembourg' },
    { code: 'DK1', name: 'Denmark 1' },
    { code: 'DK2', name: 'Denmark 2' },
    { code: 'EE', name: 'Estonia' },
    { code: 'ES', name: 'Spain' },
    { code: 'FI', name: 'Finland' },
    { code: 'FR', name: 'France' },
    { code: 'GR', name: 'Greece' },
    { code: 'HR', name: 'Croatia' },
    { code: 'HU', name: 'Hungary' },
    { code: 'IT-Calabria', name: 'Italy Calabria' },
    { code: 'IT-Centre-North', name: 'Italy Centre North' },
    { code: 'IT-Centre-South', name: 'Italy Centre South' },
    { code: 'IT-North', name: 'Italy North' },
    { code: 'IT-SACOAC', name: 'Italy Sardinia Corsica AC' },
    { code: 'IT-SACODC', name: 'Italy Sardinia Corsica DC' },
    { code: 'IT-Sardinia', name: 'Italy Sardinia' },
    { code: 'IT-Sicily', name: 'Italy Sicily' },
    { code: 'IT-South', name: 'Italy South' },
    { code: 'LT', name: 'Lithuania' },
    { code: 'LV', name: 'Latvia' },
    { code: 'ME', name: 'Montenegro' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'NO1', name: 'Norway 1' },
    { code: 'NO2', name: 'Norway 2' },
    { code: 'NO2NSL', name: 'Norway North Sea Link' },
    { code: 'NO3', name: 'Norway 3' },
    { code: 'NO4', name: 'Norway 4' },
    { code: 'NO5', name: 'Norway 5' },
    { code: 'PL', name: 'Poland' },
    { code: 'PT', name: 'Portugal' },
    { code: 'RO', name: 'Romania' },
    { code: 'RS', name: 'Serbia' },
    { code: 'SE1', name: 'Sweden 1' },
    { code: 'SE2', name: 'Sweden 2' },
    { code: 'SE3', name: 'Sweden 3' },
    { code: 'SE4', name: 'Sweden 4' },
    { code: 'SI', name: 'Slovenia' },
    { code: 'SK', name: 'Slovakia' },
];