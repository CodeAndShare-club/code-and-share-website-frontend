import axios from "./axios";

export async function getEvents() {
    try {
        const response = await axios.get(GET_EVENTS_URL, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authorization
                },
                withCredentials: false
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}