import axios from "@/axios.config";

interface params {
    email: string;
    password: string;
}

export default async function doLogin(body: params) {
    const { email, password } = body;
    try {
        const resp = await axios.get(`/user/${email}`);
        console.log(resp);
    } catch (error) {
        console.log(error);
        return false;
    }
}
