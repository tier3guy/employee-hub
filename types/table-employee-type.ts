interface IEmployee {
    _id: string;
    employee_id: string;
    first_name: string;
    last_name: string;
    position: string;
    department: string;
    date_of_joining: string;
    status: "Active" | "Inactive";
}

export default IEmployee;
