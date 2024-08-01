// axios.config.ts
import _axios from "axios";

const axios = _axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        projectId: process.env.NEXT_PUBLIC_COSMOCLOUD_PROJECT_ID,
        environmentId: process.env.NEXT_PUBLIC_COSMOCLOUD_ENVIRONMENT_ID,
    },
});

axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default axios;
