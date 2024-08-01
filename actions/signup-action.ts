import axios from "@/axios.config";
import { hashPassword } from "@/lib/utils";

interface params {
    organizationName: string;
    email: string;
    password: string;
}

export default async function doSignup(body: params) {
    const hashedPassword = await hashPassword(body.password);

    try {
        const resp = await axios.post("/user", {
            organizationName: body.organizationName,
            email: body.email,
            password: hashedPassword,
        });

        if (resp.status === 201) return true;
        else return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}
