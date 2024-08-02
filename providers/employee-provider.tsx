"use client";

import axios from "@/axios.config";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { usePathname } from "next/navigation";
import IEmployee from "@/types/employee-type";

interface EmployeeContextInterface {
    data: IEmployee;
    loading: boolean;
    error: string;
}

export const EmployeeContext = createContext<EmployeeContextInterface | null>(
    null
);

export default function EmployeeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const id = pathname.split("/")[3];

    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<IEmployee>({
        status: "",
        first_name: "",
        last_name: "",
        date_of_birth: "",
        contact_methods: {
            contact_method: "",
            value: "",
        },
        emergency_contact: {
            name: "",
            phone_number: "",
        },
        position: "",
        department: "",
        date_of_joining: "",
        salary: {
            amount: "",
            currency: "",
        },
        address: {
            street: "",
            city: "",
            state: "",
            postal_code: "",
            country: "",
        },
    });

    const fetchEmployee = useCallback(async () => {
        try {
            setLoading(true);
            const resp = await axios.get(`/employees/${id}`);

            if (resp.status === 200) {
                setData(resp.data);
            } else {
                setError("Failed to fetch employees");
                console.log(resp);
            }
        } catch (error) {
            setError("Failed to fetch employees");
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchEmployee();
    }, [fetchEmployee]);

    return (
        <EmployeeContext.Provider
            value={{
                data,
                loading,
                error,
            }}
        >
            {children}
        </EmployeeContext.Provider>
    );
}

export const useEmployee = () => {
    const context = useContext(EmployeeContext);
    if (!context) {
        throw new Error("useEmployee must be used within an EmployeeProvider");
    }
    return context;
};
