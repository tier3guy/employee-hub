import axios from "@/axios.config";
import IEmployee from "@/types/employee-type";

export default async function UpdateEmployee(id: string, body: IEmployee) {
    try {
        const resp = await axios.patch(`/employees/${id}`, body);
        if (resp.status === 200) {
            return true;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}
