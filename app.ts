// External Packages
import colors from "colors";
require('dotenv').config();
// Helpers
import { inquirerMenu, pause } from "./helpers/inquirer";
import options from "./helpers/options";

console.clear();
colors;

const main = async () => {

    let opt = "";

    do {
        opt = await inquirerMenu();

        if( opt !== "0" && typeof options()[opt] === "function") {
            await options()[opt]();
        }

        if( opt !== "0" ) await pause();
    } while (opt !== "0");

}

main();