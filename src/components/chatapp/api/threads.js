import apiClient from '../../../api/api_service';

export const get_threads = async () => {
    try {
        const resposne = await apiClient.get("/threads/get")
            .then(response => {
                return response.data["response"]
            });
        return resposne;
    } catch (error) {
        console.error('Error fetching agent data:', error);
        return [];
    }
};

export const select_proxy_thread = async (thread_id) => {
    console.log("SELECTING THREAD", thread_id)
    try {
        const resposne = await apiClient.post("/agent/proxy/thread/" + thread_id, {})
            .then(response => {
                return response.data
            });
        return resposne;
    } catch (error) {
        console.error('Error fetching thread data:', error);
        return [];
    }
};

export const delete_thread = async (thread_id) => {
    console.log("thread_id", thread_id)
    try {
        const resposne = await apiClient.delete(`/threads/${thread_id}/delete`)
            .then(response => {
                return response.data
            });
        return resposne;
    } catch (error) {
        console.error('Error fetching thread data:', error);
        return [];
    }
}