"use client";

import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Eye } from "lucide-react";
import Badge from "@/components/badge";
import TableFooter from "./table-footer";
import EmptyTablePlaceholder from "./empty-table-placeholder";
import TableRowsLoader from "@/components/loaders/table-rows-loader";
import { useEmployeeTable } from "@/providers/employee-table-provider";

export default function EmployeeTable() {
    const { employeeList: data, loading } = useEmployeeTable();

    return (
        <div>
            <div className="bg-white shadow-md h-[72vh] overflow-y-auto relative">
                {!loading && !data.length && <EmptyTablePlaceholder />}
                <Table>
                    <TableHeader className="bg-slate-100 hover:bg-slate-100 h-[60px] z-20">
                        <TableRow>
                            <TableHead className="w-[100px]">EID</TableHead>
                            <TableHead>Employee Name</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Date of Joining</TableHead>
                            <TableHead className="w-[100px]">Status</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading && <TableRowsLoader />}

                        {!loading &&
                            data.map((emp) => (
                                <TableRow
                                    key={emp._id}
                                    className="hover:bg-slate-50"
                                >
                                    <TableCell>{emp?.employee_id}</TableCell>
                                    <TableCell>
                                        {emp?.first_name + " " + emp?.last_name}
                                    </TableCell>
                                    <TableCell>{emp.position}</TableCell>
                                    <TableCell>{emp.department}</TableCell>
                                    <TableCell>{emp.date_of_joining}</TableCell>
                                    <TableCell>
                                        <Badge type={emp.status} />
                                    </TableCell>
                                    <TableCell className="flex items-center justify-end gap-2">
                                        <Link
                                            href={"/employee/view/" + emp?._id}
                                        >
                                            <Eye className="h-4 w-4 text-gray-600" />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </div>
            <div className="my-3">
                <TableFooter />
            </div>
        </div>
    );
}
