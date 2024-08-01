"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import ISignupForm from "@/types/signup-form-type";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import doSignup from "@/actions/signup-action";
import { useRouter } from "next/navigation";

export default function SignupForm() {
    const [formData, setFormData] = useState<ISignupForm>({
        organizationName: "",
        email: "",
        password: "",
        cPassword: "",
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const router = useRouter();

    const handleOnChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validateForm = (): boolean => {
        if (
            formData.organizationName === "" ||
            formData.email === "" ||
            formData.password === "" ||
            formData.cPassword === ""
        ) {
            setError("Please fill all the fields.");
            return false;
        }

        if (formData.password !== formData.cPassword) {
            setError("Password and Confirm Password must be same.");
            return false;
        }

        return true;
    };

    const handleSubmit = async () => {
        try {
            if (validateForm()) {
                setLoading(true);
                const resp = await doSignup(formData);
                if (resp) {
                    setLoading(false);
                    setError("");
                    router.push("/auth/login", { scroll: false });
                }
            }
        } catch (error) {
            console.log(error);
            setError("Oops, unable to connect !");
        } finally {
            setLoading(false);
        }
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
                            value={formData.cPassword}
                            onChange={handleOnChangeData}
                        />
                    </div>
                </div>
            </div>
            {error && <p className="w-full text-red-600">{error}</p>}
            <Button
                className="w-[200px] rounded-full m-auto"
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? "Signing Up..." : "Sign Up"}
            </Button>
        </div>
    );
}
