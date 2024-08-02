import axios from "@/axios.config";
import { generateEmployeeId } from "@/lib/utils";
import IEmployee from "@/types/employee-type";

export default async function CreateEmployee(body: IEmployee) {
    try {
        const empId = generateEmployeeId();

        const resp = await axios.post("/employees", {
            ...body,
            employee_id: empId,
        });
        if (resp.status === 201) {
            return resp.data?.id;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}
