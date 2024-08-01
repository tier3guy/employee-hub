interface IEmployee {
    id: string;
    name: string;
    position: string;
    department: string;
    joiningDate: string;
    status: "Active" | "Inactive";
}

export default IEmployee;
