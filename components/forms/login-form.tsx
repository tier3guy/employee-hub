"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import ILoginForm from "@/types/login-form-type";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import doLogin from "@/actions/login-action";

export default function LoginForm() {
    const [formData, setFormData] = useState<ILoginForm>({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const router = useRouter();

    const handleOnChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validateForm = (): boolean => {
        if (formData.email === "" || formData.password === "") {
            setError("Please fill all the fields.");
            return false;
        }

        return true;
    };

    const handleSubmit = async () => {
        try {
            if (validateForm()) {
                setLoading(true);
                const resp = await doLogin(formData);
                if (resp) {
                    setLoading(false);
                    setError("");
                    router.push("/");
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
                <h3 className="text-3xl font-bold tracking-tight">Login</h3>
                <p className="text-slate-500 w-2/3 m-auto mt-2">
                    Enter your email and password below to log into your account
                </p>
            </div>
            <div className="w-[500px] flex flex-col gap-4 my-2">
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
            </div>
            {error && <p className="w-full text-red-600">{error}</p>}
            <Button
                className="w-[200px] rounded-full m-auto"
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? "Logging Up..." : "Login"}
            </Button>
        </div>
    );
}
