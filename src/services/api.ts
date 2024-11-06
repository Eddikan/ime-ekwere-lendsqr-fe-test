// api.ts
import axios from 'axios';
import { UserType } from "@/interfaces/users";

// Define the shape of your user data

// Create an axios instance
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
});

// Fetch data function
export const fetchData = async (): Promise<UserType[]> => {
    const response = await api.get<UserType[]>('/data'); // Use the type for the response
    return response.data;
};
