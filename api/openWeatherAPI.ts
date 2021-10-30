import { OpenWeatherResponse } from "../interfaces/OpenWeatherResponse";

const axios = require('axios');

const openWeatherAPI = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
    params: {
        "appid": process.env.OPENWEATHER_TOKEN,
        "units": "metric",
        "lang": "en"
    }
});

export const getRequest = async ( params: {} ): Promise<OpenWeatherResponse> => {
    try {
        const resp = await openWeatherAPI.get( '', { params } );
        return resp.data;
    } catch (error) {
        throw new Error("Bad request");
    }
}

