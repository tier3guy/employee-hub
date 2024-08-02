"use client";

import { useState } from "react";
import ContactMethodPicker from "../contact-method-picker";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import IEmployee from "@/types/employee-type";
import CreateEmployee from "@/actions/create-employee";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CreateEmployeeForm() {
    const router = useRouter();

    const [formData, setFormData] = useState<IEmployee>({
        status: "Active",
        first_name: "",
        last_name: "",
        date_of_birth: "",
        contact_methods: {
            contact_method: "email",
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
            currency: "INR",
        },
        address: {
            street: "",
            city: "",
            state: "",
            postal_code: "",
            country: "",
        },
    });

    const [error, setError] = useState("");

    const validateData = () => {
        if (
            !formData.first_name ||
            !formData.date_of_birth ||
            !formData.position ||
            !formData.department ||
            !formData.salary.amount ||
            !formData.address.street ||
            !formData.address.city ||
            !formData.address.state ||
            !formData.address.postal_code ||
            !formData.address.country ||
            !formData.contact_methods.contact_method ||
            !formData.contact_methods.value
        ) {
            setError("* Please fill all the fields");
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
        if (validateData()) {
            const resp = await CreateEmployee(formData);
            if (resp) {
                toast("Employee added to database successfully");
                router.push("/employee/view/" + resp);
            } else {
                toast("Failed to add employee to database");
            }
        }
    };

    return (
        <div className="flex flex-col gap-6 mt-6">
            <div className="flex flex-col w-full gap-4">
                <p className="bg-gray-200 p-3">Basic Information</p>
                <div className="flex items-center gap-4">
                    <div className="flex-1 grid w-full items-center gap-2">
                        <Label htmlFor="fname px-3">
                            First Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            type="text"
                            id="fname"
                            placeholder="John"
                            name="first_name"
                            value={formData.first_name}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    first_name: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className="flex-1 grid w-full items-center gap-2">
                        <Label htmlFor="lname px-3">Last Name</Label>
                        <Input
                            type="text"
                            id="lname"
                            placeholder="Doe"
                            name="last_name"
                            value={formData.last_name}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    last_name: e.target.value,
                                }))
                            }
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex-1 grid w-full items-center gap-2">
                        <Label htmlFor="fname px-3">
                            Date of Birth{" "}
                            <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            type="text"
                            id="fname"
                            placeholder="1990-01-01"
                            name="date_of_birth"
                            value={formData.date_of_birth}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    date_of_birth: e.target.value,
                                }))
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full gap-4">
                <p className="bg-gray-200 p-3">Contact Information </p>
                <div className="flex items-center gap-4">
                    <div className="flex-1 grid w-full items-center gap-2">
                        <ContactMethodPicker
                            value={formData.contact_methods}
                            setValue={setFormData}
                        />
                    </div>
                </div>
                <p className="bg-gray-200 p-3">Emergency Contact</p>
                <div className="flex items-center gap-4">
                    <div className="flex-1 grid w-full items-center gap-2">
                        <Label htmlFor="fname px-3">Name</Label>
                        <Input
                            type="text"
                            id="e_name"
                            placeholder="Jane Doe"
                            value={formData.emergency_contact.name}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    emergency_contact: {
                                        ...prev.emergency_contact,
                                        name: e.target.value,
                                    },
                                }))
                            }
                        />
                    </div>
                    <div className="flex-1 grid w-full items-center gap-2">
                        <Label htmlFor="lname px-3">Phone</Label>
                        <Input
                            type="text"
                            placeholder="55555-55555"
                            value={formData.emergency_contact.phone_number}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    emergency_contact: {
                                        ...prev.emergency_contact,
                                        phone_number: e.target.value,
                                    },
                                }))
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full gap-4">
                <p className="bg-gray-200 p-3">Employment Details</p>
                <div className="flex items-center gap-4">
                    <div className="flex-1 grid w-full items-center gap-2">
                        <Label htmlFor="fname px-3">
                            Position <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            type="text"
                            placeholder="Software Engineer"
                            value={formData.position}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    position: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className="flex-1 grid w-full items-center gap-2">
                        <Label htmlFor="fname px-3">
                            Department <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            type="text"
                            placeholder="Engineering"
                            value={formData.department}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    department: e.target.value,
                                }))
                            }
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex-1 grid w-full items-center gap-2">
                        <Label htmlFor="fname px-3">Date of Joining</Label>
                        <Input
                            type="text"
                            placeholder="1991-02-23"
                            value={formData.date_of_joining}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    date_of_joining: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className="flex-1 grid w-full items-center gap-2">
                        <Label htmlFor="fname px-3">
                            Salary (INR) <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            type="text"
                            placeholder="70000"
                            value={formData.salary.amount}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    salary: {
                                        ...prev.salary,
                                        amount: e.target.value,
                                    },
                                }))
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full gap-4">
                <p className="bg-gray-200 p-3">Address</p>
                <div className="flex items-center gap-4">
                    <div className="flex-1 grid w-full items-center gap-2">
                        <Label htmlFor="fname px-3">
                            Street <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            type="text"
                            placeholder="123 ABC Street"
                            value={formData.address.street}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    address: {
                                        ...prev.address,
                                        street: e.target.value,
                                    },
                                }))
                            }
                        />
                    </div>
                    <div className="flex-1 grid w-full items-center gap-2">
                        <Label htmlFor="fname px-3">
                            City <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            type="text"
                            placeholder="Kolkata"
                            value={formData.address.city}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    address: {
                                        ...prev.address,
                                        city: e.target.value,
                                    },
                                }))
                            }
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex-1 grid w-full items-center gap-2">
                        <Label htmlFor="fname px-3">
                            State <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            type="text"
                            placeholder="West Bengal"
                            value={formData.address.state}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    address: {
                                        ...prev.address,
                                        state: e.target.value,
                                    },
                                }))
                            }
                        />
                    </div>
                    <div className="flex-1 grid w-full items-center gap-2">
                        <Label htmlFor="fname px-3">
                            Country <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            type="text"
                            placeholder="India"
                            value={formData.address.country}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    address: {
                                        ...prev.address,
                                        country: e.target.value,
                                    },
                                }))
                            }
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex-1 grid w-full items-center gap-2">
                        <Label htmlFor="fname px-3">
                            Zip Code <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            type="text"
                            placeholder="700006"
                            value={formData.address.postal_code}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    address: {
                                        ...prev.address,
                                        postal_code: e.target.value,
                                    },
                                }))
                            }
                        />
                    </div>
                </div>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <Button
                className="w-full rounded-none text-base"
                onClick={handleSubmit}
            >
                Create Employee
            </Button>
        </div>
    );
}
