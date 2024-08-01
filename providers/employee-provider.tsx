"use client";

import axios from "@/axios.config";
import IEmployee from "@/types/table-employee-type";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";

interface EmployeeContextInterface {
    employeeList: any[];
    loading: boolean;
    error: string;
    changePage: (page: number) => void;
    changeRowsPerPage: (rows: number) => void;
    currentPage: number;
    totalRows: number;
    totalPages: number;
    rowsPerPage: number;
}

export const EmployeeContext = createContext<EmployeeContextInterface | null>(
    null
);

export default function EmployeeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const [totalRows, setTotalRows] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);
    const [employeeList, setEmployeeList] = useState<IEmployee[]>([]);

    const fetchEmployees = useCallback(async () => {
        try {
            setLoading(true);
            const offset = (currentPage - 1) * rowsPerPage;
            const resp = await axios.get(
                `/employee?limit=${rowsPerPage}&offset=${offset}`
            );

            if (resp.status === 200) {
                setEmployeeList(resp.data?.data);
                setTotalRows(resp.data?.page?.total);
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
    }, [currentPage, rowsPerPage]);

    const changePage = (page: number) => {
        setCurrentPage(page);
    };

    const changeRowsPerPage = (rows: number) => {
        setRowsPerPage(rows);
    };

    useEffect(() => {
        setTotalPages(totalRows / rowsPerPage);
    }, [rowsPerPage, totalRows, employeeList]);

    useEffect(() => {
        fetchEmployees();
    }, [fetchEmployees]);

    return (
        <EmployeeContext.Provider
            value={{
                employeeList,
                loading,
                error,
                changePage,
                changeRowsPerPage,
                currentPage,
                totalPages,
                totalRows,
                rowsPerPage,
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
