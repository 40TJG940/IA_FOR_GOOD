import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchCampaignData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/campaign`);
        return response.data;
    } catch (error) {
        console.error('Error fetching campaign data:', error);
        throw error;
    }
};

export const submitUserInteraction = async (interactionData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/interactions`, interactionData);
        return response.data;
    } catch (error) {
        console.error('Error submitting user interaction:', error);
        throw error;
    }
};