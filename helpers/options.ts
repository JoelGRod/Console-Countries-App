// Models
import Searchs from '../models/Searchs';
// Helpers
import { readInput, selectOption } from './inquirer';

const searchs = new Searchs();

const options = (): { [id: string]: Function } => {
  return {
    "1": async () => {
      console.clear();
      // Show input message
      const search = await readInput("Search: ");
      // Search cities
      const cities = await searchs.city( search );
      // Select city
      const cityId = await selectOption(cities, "Selection:");
      const city = cities.find( city => city.id === cityId );
      // Weather
      const weather = await searchs.weather( city?.lat, city?.long );
      // Show Results
      console.log(`\nCity Info\n`.green);
      console.log(`City: ${ city?.name }`);
      console.log(`Lat: ${ city?.lat }`);
      console.log(`Long: ${ city?.long }`);
      console.log(`Temperature: ${ weather.temp }`);
      console.log(`Min: ${ weather.temp_min }`);
      console.log(`Max: ${ weather.temp_max }`);
      console.log(`What's the weather like?: ${ weather.description }`);
    },
    "2": async () => {
      console.log("history options");
      console.log(searchs.history);
    },
  };
};

export default options;