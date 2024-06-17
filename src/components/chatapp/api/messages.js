import apiClient from '../../../api/api_service';

export const getMessages = async (thread) => {
    try {
        const resposne = await apiClient.get(`/messages/${thread.thread_id}/get`)
            .then(response => {
                return response.data["response"]
            });
        return resposne;
    } catch (error) {
        console.error('Error fetching data using messages/get:', error);
        return [];
    }
};

export const sendMessage = async (message) => {
    try {
        const response = await apiClient.post("/messages/add", message);
        return response.data["response"];
    } catch (error) {
        console.error('Error fetching data using addMessage:', error);
        return null;
    }
};

export const deleteMessages = async () => {
    try {
        const response = await apiClient.delete("/deletemessages",);
        return response.data["response"];
    } catch (error) {
        console.error('Error fetching data using deleteMessage:', error);
        return ["Error: API Error"];
    }
}