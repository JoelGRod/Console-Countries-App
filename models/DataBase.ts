import fs from "fs";

class DataBase {

  private _file: string = "./repository/data.json";

  public constructor() {}

  public readDatabase() {
    if (fs.existsSync(this._file)) {
      const data = fs.readFileSync(this._file, { encoding: "utf-8" });
      return JSON.parse(data);
    }
    return [];
  }

  public async writeDatabase( data: string[] ) {
    try {
        await fs.writeFileSync(this._file, JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
  }

}

export default DataBase;
