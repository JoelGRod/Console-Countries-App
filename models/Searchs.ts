import mapboxAPI from '../api/mapboxAPI';

class Searchs {

    public history: string[] = [];

    public constructor() {}

    public async city( searchTerm: string ): Promise<{}> {
        try {
            const resp = await mapboxAPI.get(`${ searchTerm }.json`);
            return resp.data;
        } catch (error) {
            console.log(error);
            return {};
        }
    }

}

export default Searchs;