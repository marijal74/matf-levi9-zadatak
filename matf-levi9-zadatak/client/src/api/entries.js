import axios from "axios"
import * as qs from "qs";
class ItemApi {

    config = {
        baseURL: "http://localhost",
        port: 8080
    };

    constructor() {
        this.httpClient = axios.create({
            baseURL: `${this.config.baseURL}:${this.config.port}`
        });
    }

    getAllItems() {
        
        return this.httpClient
                   .get("/admin/proizvodi")
                   .then(res => 
                    res.data.map(item => this.mapResponse(item)));

    }
    getHome() {
        
        return this.httpClient
                   .get("/")
                   .then(res => 
                    res.data.map(item => this.mapResponse(item)));

    }
    getItem(id) {
        console.log(id);
        return this.httpClient
                   .get(`/admin/proizvodi/${id}`)
                   .then(res => this.mapResponse(res.data));

    }
    createItem(item) {
        
        const config = {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
        };
        
        return this.httpClient
                   .post(`/admin/unos-novog-proizvoda`, qs.stringify(item), config)
                   .then(res => this.mapResponse(res.data));

    }
    deleteItem(id){
        return this.httpClient.delete(`/admin/proizvodi/${id}`);
    }
    mapResponse(res){
        return {
            
            id: res.id,
            name: res.name,
            description: res.description,
            price: res.price
        };
    }
}
export default new ItemApi();