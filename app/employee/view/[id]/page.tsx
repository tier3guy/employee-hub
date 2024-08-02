"use client";

import Image from "next/image";
import ProfilePlaceholder from "@/public/profile-placeholder.png";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import IEmployee from "@/types/employee-type";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/back-button";
import { useEmployee } from "@/providers/employee-provider";
import EmployeeFormLoader from "@/components/loaders/employee-form-loader";
import { toast } from "sonner";
import DeleteEmployeeDialog from "@/components/dialogs/delete-employee-dialog";
import EmployeeStatusPicker from "@/components/employee-status-picker";
import UpdateEmployee from "@/actions/update-employee";

export default function Page() {
    const { data, loading } = useEmployee();
    const [formData, setFormData] = useState<IEmployee>(data);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        //@ts-ignore
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleUpdate = async () => {
        let body = formData;
        delete body._id;

        const resp = await UpdateEmployee(data?._id!, body);
        if (resp) {
            toast.success("Employee updated successfully");
        } else {
            toast.error("Failed to update employee");
        }
    };

    useEffect(() => {
        setFormData(data);
    }, [data]);

    return (
        <div className="">
            <div className="w-full h-[25vh] bg-gradient-to-b from-blue-500 to-blue-700 relative py-6 px-[20%]">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-4">
                        <BackButton />
                        <h1 className="font-bold text-3xl text-white">
                            Employee Details
                        </h1>
                    </div>
                </div>
                <div className="h-[150px] w-[150px] rounded-full bg-white absolute top-full -translate-y-1/2 left-[20%] border overflow-hidden shadow">
                    <Image
                        src={ProfilePlaceholder}
                        height={150}
                        width={150}
                        alt="profile-photo"
                        className="mt-3"
                    />
                </div>
            </div>
            <div className="mt-[100px] mb-6 px-[20%]">
                {loading && <EmployeeFormLoader />}
                {!loading && formData && (
                    <div className="flex flex-col w-full gap-6">
                        <div className="flex flex-col">
                            <p className="text-slate-500 text-xl font-medium pb-2 border-b-2">
                                Basic Information
                            </p>
                            <div className="flex items-center gap-4 mt-6">
                                <div className="flex-1 grid w-full items-center gap-2">
                                    <Label htmlFor="fname">First Name</Label>
                                    <Input
                                        type="text"
                                        id="fname"
                                        placeholder="John"
                                        value={formData.first_name}
                                        name="first_name"
                                        onChange={handleOnChange}
                                        className="text-md font-medium"
                                    />
                                </div>
                                <div className="flex-1 grid w-full items-center gap-2">
                                    <Label htmlFor="lname">Last Name</Label>
                                    <Input
                                        type="text"
                                        id="lname"
                                        placeholder="Doe"
                                        value={formData.last_name}
                                        name="last_name"
                                        onChange={handleOnChange}
                                        className="text-md font-medium"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                <div className="flex-1 grid w-full items-center gap-2">
                                    <Label htmlFor="job-role">Job Role</Label>
                                    <Input
                                        type="text"
                                        id="job-role"
                                        placeholder="Software Engineer"
                                        value={formData.position}
                                        name="position"
                                        onChange={handleOnChange}
                                        className="text-md font-medium"
                                    />
                                </div>
                                <div className="flex-1 grid w-full items-center gap-2">
                                    <Label htmlFor="dept">Department</Label>
                                    <Input
                                        type="text"
                                        id="dept"
                                        placeholder="Information Technology (IT)"
                                        value={formData.department}
                                        name="department"
                                        onChange={handleOnChange}
                                        className="text-md font-medium"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-slate-500 text-xl font-medium pb-2 border-b-2">
                                Employment Information
                            </p>
                            <div className="flex items-center gap-4 mt-6">
                                <div className="flex-1 grid w-full items-center gap-2">
                                    <Label htmlFor="fname">Employee ID</Label>
                                    <Input
                                        type="text"
                                        id="employee_id"
                                        placeholder="EM001"
                                        value={formData.employee_id}
                                        name="employee_id"
                                        onChange={handleOnChange}
                                        className="text-md font-medium"
                                        disabled
                                    />
                                </div>
                                <div className="flex-1 grid w-full items-center gap-2">
                                    <EmployeeStatusPicker
                                        value={formData.status}
                                        setValue={setFormData}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                <div className="flex-1 grid w-full items-center gap-2">
                                    <Label htmlFor="fname">Salary (INR)</Label>
                                    <Input
                                        type="number"
                                        id="salary"
                                        placeholder="66000"
                                        value={formData?.salary.amount}
                                        name="salary"
                                        onChange={(e) => {
                                            //@ts-ignore
                                            setFormData((prev) => ({
                                                ...prev,
                                                salary: {
                                                    amount: e.target.value,
                                                    currency: "INR",
                                                },
                                            }));
                                        }}
                                        className="text-md font-medium"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-slate-500 text-xl font-medium pb-2 border-b-2">
                                Contact Information
                            </p>
                            <div className="flex items-center gap-4 mt-6">
                                {/* <div className="flex-1 grid w-full items-center gap-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input
                                        type="number"
                                        id="phone"
                                        placeholder="+12 34567 89101"
                                        value={formData.contact_methods.value}
                                    />
                                </div> */}
                                <div className="flex-1 grid w-full items-center gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="john.doe@example.com"
                                        value={formData.contact_methods.value}
                                        onChange={(e) => {
                                            //@ts-ignore
                                            setFormData((prev) => ({
                                                ...prev,
                                                contact_methods: {
                                                    value: e.target.value,
                                                    contact_method: "email",
                                                },
                                            }));
                                        }}
                                        className="text-md font-medium"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-slate-500 text-xl font-medium pb-2 border-b-2">
                                Address
                            </p>
                            <div className="flex items-center gap-4 mt-6">
                                <div className="flex-1 grid w-full items-center gap-2">
                                    <Label htmlFor="line1">Line 1</Label>
                                    <Input
                                        type="text"
                                        id="line1"
                                        placeholder="12, Brojo Dulal Street"
                                        value={formData.address.street}
                                        onChange={(e) => {
                                            //@ts-ignore
                                            setFormData((prev) => ({
                                                ...prev,
                                                address: {
                                                    ...prev?.address,
                                                    street: e.target.value,
                                                },
                                            }));
                                        }}
                                        className="text-md font-medium"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                <div className="flex-1 grid w-full items-center gap-2">
                                    <Label htmlFor="city">City</Label>
                                    <Input
                                        type="text"
                                        id="city"
                                        placeholder="Kolkata"
                                        value={formData.address.city}
                                        onChange={(e) => {
                                            //@ts-ignore
                                            setFormData((prev) => ({
                                                ...prev,
                                                address: {
                                                    ...prev?.address,
                                                    city: e.target.value,
                                                },
                                            }));
                                        }}
                                        className="text-md font-medium"
                                    />
                                </div>
                                <div className="flex-1 grid w-full items-center gap-2">
                                    <Label htmlFor="state">State</Label>
                                    <Input
                                        type="text"
                                        id="state"
                                        placeholder="West Bengal"
                                        value={formData.address.state}
                                        onChange={(e) => {
                                            //@ts-ignore
                                            setFormData((prev) => ({
                                                ...prev,
                                                address: {
                                                    ...prev?.address,
                                                    state: e.target.value,
                                                },
                                            }));
                                        }}
                                        className="text-md font-medium"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-6">
                                <div className="flex-1 grid w-full items-center gap-2">
                                    <Label htmlFor="zip">Zip Code</Label>
                                    <Input
                                        type="number"
                                        id="zip"
                                        placeholder="700006"
                                        value={formData.address.postal_code}
                                        onChange={(e) => {
                                            //@ts-ignore
                                            setFormData((prev) => ({
                                                ...prev,
                                                address: {
                                                    ...prev?.address,
                                                    postal_code: e.target.value,
                                                },
                                            }));
                                        }}
                                        className="text-md font-medium"
                                    />
                                </div>
                                <div className="flex-1 grid w-full items-center gap-2">
                                    <Label htmlFor="country">Country</Label>
                                    <Input
                                        type="text"
                                        id="country"
                                        placeholder="India"
                                        value={formData.address.country}
                                        onChange={(e) => {
                                            //@ts-ignore
                                            setFormData((prev) => ({
                                                ...prev,
                                                address: {
                                                    ...prev?.address,
                                                    country: e.target.value,
                                                },
                                            }));
                                        }}
                                        className="text-md font-medium"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3  mt-6">
                            <Button
                                onClick={handleUpdate}
                                className="rounded-none px-6 py-3 w-[200px] text-base shadow-xl"
                            >
                                Update
                            </Button>
                            <DeleteEmployeeDialog />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
