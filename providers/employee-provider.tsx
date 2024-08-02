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
    data: IEmployee | null;
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
    const [data, setData] = useState<IEmployee | null>(null);

    const fetchEmployee = useCallback(async () => {
        try {
            setLoading(true);
            const resp = await axios.get(`/employee/${id}`);

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
