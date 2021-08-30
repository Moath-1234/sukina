import axios from "axios";

class ApiService {
    baseURL = "https://www.moeabahre.com/sukina/processes/";

    unauthenticated() {
        return axios.create({ mode: "cors", baseURL: "https://www.moeabahre.com/sukina/processes/" });
    }
}

export const apiService = new ApiService();
