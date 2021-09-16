import axios from "axios";

class ApiService {
    baseURL = "https://alnabta.com/sukina/processes/";

    unauthenticated() {
        return axios.create({ mode: "cors", baseURL: "https://alnabta.com/sukina/processes/" });
    }
}

export const apiService = new ApiService();
