import { apiService } from "./ApiService";
import { apiEndpoints } from "../api";
import { handleResponse } from "../utils/misc";

class GeneralServices {
    async AppointmentBooking(AppointmentData) {
        try {
            const data = await apiService
                .unauthenticated()
                .post(apiEndpoints.AppointmentBooking, AppointmentData)
                .then(({ data }) => data.response);

            return handleResponse({ success: true, data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }
    async getAllBlogs() {
        try {
            const data = await apiService
                .unauthenticated()
                .post(apiEndpoints.getBlogs)
                .then(({ data }) => data.response);

            return handleResponse({ success: true, data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.response });
        }
    }

    async sendContactMessage(contactData) {
        try {
            const data = await apiService
                .unauthenticated()
                .post(apiEndpoints.contact, contactData)
                .then(({ data }) => data.response);

            return handleResponse({ success: true, data });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    /**
    async getAllCountries() {
        try {
            const { message, data } = await apiService
                .unauthenticated()
                .get(apiEndpoints.general.getAllCountries)
                .then(({ data }) => data);

            return handleResponse({ success: true, message, data });
        } catch ({ response }) {
            return handleResponse({ success: false, message: response.data.message, data: [] });
        }
    }



 
 

    async getCategoryInsurances(categoryId, countryId) {
        try {
            const { data } = await apiService
                .authenticated()
                .get(`${apiEndpoints.general.getCategoryInsurances}?category_id=${categoryId}&country_id=${countryId}`)
                .then(({ data }) => data);
            console.log(data, "from try 2");
            return handleResponse({ success: true, data });
        } catch ({ response }) {
            console.log(...response?.data, "from catch 2");
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async getAllProducts() {
        try {
            return handleResponse({
                success: true,
                ...(await apiService
                    .authenticated()
                    .get(apiEndpoints.general.getAllProducts)
                    .then(({ data }) => data)),
            });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }

    async getCountryByIP() {
        try {
            return handleResponse({
                success: true,
                ...(await apiService
                    .authenticated()
                    .get(apiEndpoints.general.getCountryByIP)
                    .then(({ data }) => data)),
            });
        } catch ({ response }) {
            return handleResponse({ success: false, ...response?.data });
        }
    }
 */
}

export const generalServices = new GeneralServices();
