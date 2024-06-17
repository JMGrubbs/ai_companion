import axios from 'axios';

export const FetchProjects = async (configAPI) => {
    try {
        const response = await axios.get(`${configAPI["props"]["config"]["API_URL"]}`, {
            headers: { 
                'x-api-key': `${configAPI["props"]["config"]["API_KEY"]}`
            }
        });
        let get_projects = []
        for (let i = 0; i < response.data.length; i++) {
            get_projects.push ({
                "project_id": response.data[i].project_id,
                "project_name": response.data[i].project_name,
                "project_url": response.data[i].project_url,
                "project_description": response.data[i].project_description,
            })
        }
        return get_projects;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
};

