"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";

import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { useState } from "react";
import { useEmployee } from "@/providers/employee-provider";

const rowsPerPage = [
    {
        value: 10,
        label: "10",
    },
    {
        value: 20,
        label: "20",
    },
    {
        value: 30,
        label: "30",
    },
    {
        value: 40,
        label: "40",
    },
    {
        value: 50,
        label: "50",
    },
];

export default function RowsFilter() {
    const { rowsPerPage: value, changeRowsPerPage } = useEmployee();
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[80px] justify-between rounded-none"
                >
                    {value
                        ? rowsPerPage.find((rows) => rows.value === value)
                              ?.label
                        : "Select Rows..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[80px] p-0 rounded-none">
                <Command>
                    <CommandList className="z-10 rounded-none p-1">
                        {rowsPerPage.map((rows) => (
                            <button
                                key={rows.value}
                                onClick={() => {
                                    changeRowsPerPage(rows.value);
                                    setOpen(false);
                                }}
                                className={cn(
                                    "w-full flex items-center text-slate-400 text-sm p-1",
                                    value === rows.value && "bg-slate-100"
                                )}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === rows.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                    )}
                                />
                                {rows.label}
                            </button>
                        ))}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
