interface Address {
    street: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
}

interface ContactMethod {
    contact_method: string;
    value: string;
}

interface EmergencyContact {
    name: string;
    relationship: string;
    phone_number: string;
}

interface Salary {
    amount: number;
    currency: string;
}

interface IEmployee {
    _id: string;
    first_name: string;
    last_name: string;
    date_of_birth: string;
    date_of_joining: string;
    department: string;
    position: string;
    employee_id: string;
    manager_id: string;
    oranganization_id: string;
    status: string;
    profile_picture: string;
    address: Address;
    contact_methods: ContactMethod;
    emergency_contact: EmergencyContact;
    salary: Salary;
    skills: string[];
}

export default IEmployee;
