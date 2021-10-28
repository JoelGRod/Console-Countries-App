// Models
import Searchs from '../models/Searchs';
import { readInput } from './inquirer';
// Helpers

const searchs = new Searchs();

const options = (): { [id: string]: Function } => {
  return {
    "1": async () => {
      console.clear();
      // Show input message
      const search = await readInput("Search: ");
      // Search cities
      const resp = await searchs.city( search );
      console.log(resp);
      // Select city
      // Weather
      // Show Results
      console.log(`\nCity Info\n`.green);
      console.log(`City: `);
      console.log(`Lat: `);
      console.log(`Long: `);
      console.log(`Temperature: `);
      console.log(`Min: `);
      console.log(`Max: `);
      console.log(`What's the weather like?: `);
    },
    "2": async () => {
      console.log("history options");
      console.log(searchs.history);
    },
  };
};

export default options;