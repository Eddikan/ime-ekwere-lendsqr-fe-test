// api.ts
import axios from 'axios';

// Define the shape of your user data
export interface UserData {
    id: string;
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
}

// Create an axios instance
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
});

// Fetch data function
export const fetchData = async (): Promise<UserData[]> => {
    const response = await api.get<UserData[]>('/data'); // Use the type for the response
    return response.data;
};
