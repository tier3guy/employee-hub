"use client";

import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown } from "lucide-react";
import IEmployee from "@/types/employee-type";

interface Props {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<IEmployee>>;
}

export default function EmployeeStatusPicker({ value, setValue }: Props) {
    const [selectedStatus, setSelectedStatus] = useState<string>(value);
    const status = ["Active", "Inactive"];

    useEffect(() => {
        setSelectedStatus(value);
    }, [value]);

    return (
        <>
            <Label htmlFor="status">Employment Status</Label>
            <DropdownMenu>
                <DropdownMenuTrigger className="border-2 flex items-start justify-between py-[6.5px] px-3">
                    <p className="text-slate-500">{selectedStatus}</p>
                    <ChevronsUpDown className="text-slate-500 h-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="rounded-none w-[300px]">
                    {status.map((st) => (
                        <DropdownMenuItem
                            key={st}
                            onClick={() => {
                                setSelectedStatus(st);
                                setValue((prev: any) => ({
                                    ...prev,
                                    status: st,
                                }));
                            }}
                            className="w-full rounded-none"
                        >
                            {st}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}
