import axios from "axios"

export default class advertisementService{
    getAdvertisements(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getall")
    }
    
}