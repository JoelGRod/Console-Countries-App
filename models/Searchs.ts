// Adapter
import * as mapboxAPI from "../api/mapboxAPI";
import * as weatherAPI from "../api/openWeatherAPI";
// Interfaces
import { City } from "../interfaces/City";

class Searchs {

  public constructor() {}

  public async city(searchTerm: string): Promise<City[]> {
    try {
      const resp = await mapboxAPI.getRequest(searchTerm);
      const cities = resp.features.map((city) => ({
        id: city.id,
        name: city.place_name,
        long: city.center[0],
        lat: city.center[1],
      }));
      return cities;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  public async weather(lat: number, lon: number) {
    try {
      const resp = await weatherAPI.getRequest({ lat, lon });
      return {
        description: resp.weather[0].description,
        temp: resp.main.temp,
        temp_min: resp.main.temp_min,
        temp_max: resp.main.temp_max,
      };
    } catch (error) {
      console.log(error);
      return {};
    }
  }
}

export default Searchs;
