import apiClient from './api_service';

export const get_agents = async () => {
    try {
        const resposne = await apiClient.get("/agents/get")
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

export const create_agent = async (newAgent) => {
    try {
        const resposne = await apiClient.post("/agents/create", newAgent)
            .then(response => {
                return response.data
            });
        return resposne;
    } catch (error) {
        console.error('Error fetching agent data:', error);
        return [];
    }
}

export const delete_agent = async (agent) => {
    try {
        const resposne = await apiClient.delete("/agents/delete", { data: agent })
            .then(response => {
                return response.data
            });
        return resposne;
    } catch (error) {
        console.error('Error fetching agent data:', error);
        return [];
    }
}