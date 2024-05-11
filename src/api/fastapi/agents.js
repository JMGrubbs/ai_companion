import apiClient from './api_service';

export const get_agents = async () => {
    try {
        const resposne = await apiClient.get("/agents/")
            .then(response => {
                return response.data["response"]
            });
        return resposne;
    } catch (error) {
        console.error('Error fetching agent data:', error);
        return [];
    }
};

export const send_proxy_message = async (message) => {
    try {
        const resposne = await apiClient.post("/agent/message", { "user-input": message })
            .then(response => {
                return response.data
            });
        return resposne;
    } catch (error) {
        console.error('Error fetching agent data:', error);
        return [];
    }
};
