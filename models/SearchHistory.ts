import { readDatabase, writeDatabase } from '../db/dbConfig';

class SearchHistory {

  private _history: string[] = [];
  private _db: string = "data.json";

  public get history() {
    const capitalizedHistory = this._history.map((term) => {
      const termList = term
        .split(" ")
        .map((word) => word[0].toLocaleUpperCase() + word.slice(1));
      return termList.join(" ");
    });
    return capitalizedHistory;
  }

  public constructor() {
    this._history = readDatabase( this._db );
  }

  public addHistory(place: string) {
    if (this.history.includes(place.toLocaleLowerCase())) return;
    this._history = this._history.splice(0, 5);
    this._history.unshift(place.toLocaleLowerCase());
    writeDatabase(this._history, this._db);
  }
}

export default SearchHistory;
