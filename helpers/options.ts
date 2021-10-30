// Models
import DataBase from '../models/DataBase';
import Searchs from '../models/Searchs';
// Helpers
import { readInput, selectOption } from './inquirer';

const db = new DataBase();
const searchs = new Searchs( db );

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
      if( cityId === "0" ) return;

      const city = cities.find( city => city.id === cityId );
      // Save history
      searchs.addHistory(city!.name);
      // Save in db
      db.writeDatabase(searchs.history);
      // Weather
      const weather = await searchs.weather( city!.lat, city!.long );
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
      searchs.history.forEach( ( search, id ) => {
        const idx = `${ id + 1 }.`.green;
        console.log(`${ idx } ${ search }`);
      })
    },
  };
};

export default options;