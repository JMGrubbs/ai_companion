import apiClient from '../../../api/api_service';

export const validatePassword = async (pass) => {
    try {
        const response = await apiClient.put(`validations/validateuser`, { "password": pass })
            .then(response => {
                const data = response.data
                if (data["response"]["validation"] === "success") {
                    return data["response"]["key"]
                }
                return false
            });
        return response;
    } catch (error) {
        console.error('Error fetching data using messages/get:', error);
        return [];
    }
};