import { MapboxResponse } from "../interfaces/MapboxResponse";

const axios = require('axios');

const mapboxAPI = axios.create({
    baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places/",
    params: {
        "access_token": process.env.MAPBOX_TOKEN,
        "limit": 5,
        "language": "en"
    }
});

export const getRequest = async ( searchTerm: string ): Promise<MapboxResponse> => {
    try {
        const resp = await mapboxAPI.get(`${ searchTerm }.json`);
        return resp.data;
    } catch (error) {
        throw new Error("Bad request");
    }
}

