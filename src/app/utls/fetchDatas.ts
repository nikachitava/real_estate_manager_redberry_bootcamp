import { makeRequest } from "../utils/axios"

export const fetchRegions = async () => {
    
    try {
        const response = await makeRequest.get("/regions");
        return response.data;
    } catch (error) {
        console.log(error)
    }
}