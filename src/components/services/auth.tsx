import axios from "axios";
import Cookies from "js-cookie";
import { API_ENDPOINTS } from "./endpoints";
import { ResponseEnum } from "./constants";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const registerUser = async (object: any) => {
    try {
        const url = `${BACKEND_URL}${API_ENDPOINTS.REGISTER_USER}`;
        const payload = {
            name: object.name,
            email: object.email,
            password: object.password,
            role: object.role,
        };
        const response = await axios.post(url, payload, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.data.success === ResponseEnum.SUCCESS) {
            return response.data;
        } else {
            return response.data;
        }
    } catch (error) {
        return { success: false }
    }
}

export const loginUser = async (object: any) => {
    try {
        const url = `${BACKEND_URL}${API_ENDPOINTS.LOGIN_USER}`;
        const payload = {            
            email: object.email,
            password: object.password            
        };
        const response = await axios.post(url, payload, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.data.success === ResponseEnum.SUCCESS) {
            const token = response.data.data.token;
            Cookies.set("token", token);
            return response.data;
        } else {
            return response.data;
        }
    } catch (error) {
        return { success: false }
    }
}

export const forgotUser = async (object: any) => {
    try {
        const url = `${BACKEND_URL}${API_ENDPOINTS.FORGOT_PASSWORD}`;
        const payload = {            
            email: object.email,           
        };
        const response = await axios.post(url, payload, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.data.success === ResponseEnum.SUCCESS) {
            return response.data;
        } else {
            return response.data;
        }
    } catch (error) {
        return { success: false }
    }
}

export const resetUser = async (object: any) => {
    try {
        const url = `${BACKEND_URL}${API_ENDPOINTS.RESET_PASSWORD}`;
        const payload = {
            password: object.password,
            token: object.token
        };
        const response = await axios.post(url, payload, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.data.success === ResponseEnum.SUCCESS) {
            return response.data;
        } else {
            return response.data;
        }
    } catch (error) {
        return { success: false }
    }
}   


export const getUser = async () => {
    try {
        const url = `${BACKEND_URL}${API_ENDPOINTS.GET_PROFILE}`;
        const token = Cookies.get("token");
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        });
        if (response.data.success === ResponseEnum.SUCCESS) {
            return response.data;
        } else {
            return response.data;
        }
    } catch (error) {
        return { success: false }
    }
}   