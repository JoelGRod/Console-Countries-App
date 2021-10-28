const axios = require('axios');

const mapboxAPI = axios.create({
    baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places/",
    params: {
        "access_token": process.env.MAPBOX_TOKEN,
        "limit": 5,
        "language": "en"
    }
});

export default mapboxAPI;