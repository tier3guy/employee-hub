"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import ISignupForm from "@/types/signup-form-type";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";

export default function SignupForm() {
    const [formData, setFormData] = useState<ISignupForm>({
        organizationName: "",
        email: "",
        password: "",
        cPassowrd: "",
    });

    const handleOnChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="flex items-center flex-col gap-4">
            <div className="text-center">
                <h3 className="text-3xl font-bold tracking-tight">
                    Create an Account
                </h3>
                <p className="text-slate-500">
                    Enter your email below to create your account
                </p>
            </div>
            <div className="w-[500px] flex flex-col gap-4 my-2">
                <div className="flex-1 grid w-full items-center gap-1">
                    <Label htmlFor="oragnization-name">Organization Name</Label>
                    <Input
                        type="text"
                        id="oragnization-name"
                        placeholder="ABC Company and Sales"
                        value={formData.organizationName}
                        name="organizationName"
                        onChange={handleOnChangeData}
                    />
                </div>
                <div className="flex-1 grid w-full items-center gap-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="text"
                        id="email"
                        placeholder="hr@abc.company.in"
                        name="email"
                        value={formData.email}
                        onChange={handleOnChangeData}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex-1 grid w-full items-center gap-1">
                        <Label htmlFor="email">Password</Label>
                        <Input
                            type="password"
                            id="passowrd"
                            placeholder="Passowrd"
                            name="password"
                            value={formData.password}
                            onChange={handleOnChangeData}
                        />
                    </div>
                    <div className="flex-1 grid w-full items-center gap-1">
                        <Label htmlFor="email">Confirm Password</Label>
                        <Input
                            type="password"
                            id="cpassowrd"
                            placeholder="Confirm Password"
                            name="cPassword"
                            value={formData.cPassowrd}
                            onChange={handleOnChangeData}
                        />
                    </div>
                </div>
            </div>
            <Button className="w-[200px] rounded-full m-auto">Sign Up</Button>
        </div>
    );
}
