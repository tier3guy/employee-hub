import Image from "next/image";
import ProfilePlaceholder from "@/public/profile-placeholder.png";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <div className="">
            <div className="w-full -z-10 h-[25vh] bg-gradient-to-b from-blue-500 to-blue-700 relative py-6 px-[20%]">
                <div className="flex items-center justify-between">
                    <h1 className="font-bold text-3xl text-white">
                        Employee Details
                    </h1>
                    <div className="flex items-center gap-2">
                        <p className="text-slate-600 font-medium bg-gray-100 py-[3px] px-4 border border-gray-400">
                            Employee ID: EMP001
                        </p>
                        {/* <p className="text-slate-600 font-medium bg-gray-100 py-[3px] px-4 border border-gray-400">
                            Manager ID: EMP-MNG-001
                        </p> */}
                        <div className="py-[3px] px-6 bg-green-300 border-green-500 border">
                            Active
                        </div>
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
                                />
                            </div>
                            <div className="flex-1 grid w-full items-center gap-2">
                                <Label htmlFor="lname">Last Name</Label>
                                <Input
                                    type="text"
                                    id="lname"
                                    placeholder="Doe"
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
                                />
                            </div>
                            <div className="flex-1 grid w-full items-center gap-2">
                                <Label htmlFor="dept">Department</Label>
                                <Input
                                    type="text"
                                    id="dept"
                                    placeholder="Information Technology (IT)"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-slate-500 text-xl font-medium pb-2 border-b-2">
                            Contact Information
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <div className="flex-1 grid w-full items-center gap-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    type="number"
                                    id="phone"
                                    placeholder="+12 34567 89101"
                                />
                            </div>
                            <div className="flex-1 grid w-full items-center gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="email"
                                    id="email"
                                    placeholder="john.doe@example.com"
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
                                />
                            </div>
                            <div className="flex-1 grid w-full items-center gap-2">
                                <Label htmlFor="state">State</Label>
                                <Input
                                    type="text"
                                    id="state"
                                    placeholder="West Bengal"
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
                                />
                            </div>
                            <div className="flex-1 grid w-full items-center gap-2">
                                <Label htmlFor="country">Country</Label>
                                <Input
                                    type="text"
                                    id="country"
                                    placeholder="India"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-slate-500 text-xl font-medium pb-2 border-b-2">
                            Skills
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mt-6">
                            <p className="text-slate-600 font-medium bg-gray-100 py-[3px] px-4 border border-gray-400">
                                React JS
                            </p>
                            <p className="text-slate-600 font-medium bg-gray-100 py-[3px] px-4 border border-gray-400">
                                Javascript
                            </p>
                            <p className="text-slate-600 font-medium bg-gray-100 py-[3px] px-4 border border-gray-400">
                                Node JS
                            </p>
                            <p className="text-slate-600 font-medium bg-gray-100 py-[3px] px-4 border border-gray-400">
                                Typscript
                            </p>
                            <p className="text-slate-600 font-medium bg-gray-100 py-[3px] px-4 border border-gray-400">
                                Express
                            </p>
                            <p className="text-slate-600 font-medium bg-gray-100 py-[3px] px-4 border border-gray-400">
                                Mongo DB
                            </p>
                            <p className="text-slate-600 font-medium bg-gray-100 py-[3px] px-4 border border-gray-400">
                                React JS
                            </p>
                            <p className="text-slate-600 font-medium bg-gray-100 py-[3px] px-4 border border-gray-400">
                                Javascript
                            </p>
                            <p className="text-slate-600 font-medium bg-gray-100 py-[3px] px-4 border border-gray-400">
                                Node JS
                            </p>
                            <p className="text-slate-600 font-medium bg-gray-100 py-[3px] px-4 border border-gray-400">
                                Typscript
                            </p>
                            <p className="text-slate-600 font-medium bg-gray-100 py-[3px] px-4 border border-gray-400">
                                Express
                            </p>
                            <p className="text-slate-600 font-medium bg-gray-100 py-[3px] px-4 border border-gray-400">
                                Mongo DB
                            </p>
                            <p className="text-slate-600 font-medium bg-gray-100 py-[3px] px-4 border border-gray-400">
                                React JS
                            </p>
                            <p className="text-slate-600 font-medium bg-gray-100 py-[3px] px-4 border border-gray-400">
                                Javascript
                            </p>
                            <p className="text-slate-600 font-medium bg-gray-100 py-[3px] px-4 border border-gray-400">
                                Node JS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
