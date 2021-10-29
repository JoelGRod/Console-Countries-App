import * as mapboxAPI from '../api/mapboxAPI';

class Searchs {

    public history: string[] = [];

    public constructor() {}

    public async city( searchTerm: string ): Promise<{}> {
        try {
            const resp = await mapboxAPI.getRequest(searchTerm);
            const cities = resp.features.map( city => ({ 
                id: city.id, 
                name: city.place_name,
                lat: city.geometry.coordinates[0],
                long: city.geometry.coordinates[1],
                temperature: "25º",
                min: "10º",
                max: "40º",
            }));
            return cities;
        } catch (error) {
            console.log(error);
            return {};
        }
    }

}

export default Searchs;