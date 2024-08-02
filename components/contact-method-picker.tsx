"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "./ui/label";
import { useState, ChangeEvent, FocusEvent } from "react";
import { ChevronsUpDown } from "lucide-react";
import { Input } from "./ui/input";

interface Method {
    id: number;
    name: string;
}

interface Props {
    value: any;
    setValue: React.Dispatch<React.SetStateAction<any>>;
}

export default function ContactMethodPicker({ value, setValue }: Props) {
    const methods: Method[] = [
        { id: 1, name: "Email" },
        { id: 2, name: "Phone" },
    ];

    const [selectedMethod, setSelectedMethod] = useState<Method>(methods[0]);
    const [contactValue, setContactValue] = useState<string>(value?.value);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setContactValue(e.target.value);
        setValue((prev: any) => ({
            ...prev,
            contact_methods: {
                contact_method: selectedMethod.name.toLowerCase(),
                value: e.target.value,
            },
        }));
    };

    return (
        <>
            <Label htmlFor="contact_method">
                Contact Method <span className="text-red-500">*</span>
            </Label>
            <DropdownMenu>
                <DropdownMenuTrigger className="border-2 flex items-start justify-between py-2 px-3">
                    <p className="text-slate-500">{selectedMethod.name}</p>
                    <ChevronsUpDown className="text-slate-500 h-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="rounded-none w-[300px]">
                    {methods.map((method) => (
                        <DropdownMenuItem
                            key={method.id}
                            onClick={() => {
                                setSelectedMethod(method);
                                setValue((prev: any) => ({
                                    ...prev,
                                    contact_methods: {
                                        contact_method:
                                            method.name.toLowerCase(),
                                        value: contactValue,
                                    },
                                }));
                            }}
                            className="w-full rounded-none"
                        >
                            {method.name}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            {selectedMethod && (
                <Input
                    id="contact_value"
                    type="text"
                    value={contactValue}
                    onChange={handleInputChange}
                />
            )}
        </>
    );
}
