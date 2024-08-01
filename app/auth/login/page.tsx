import LoginForm from "@/components/forms/login-form";
import Logo from "@/components/logo";

export default function Page() {
    return (
        <div className="h-screen w-screen overflow-hidden flex">
            <div className="flex-1 h-full bg-gradient-to-b from-blue-400 to-blue-700 grid place-content-center">
                <div className="flex items-center flex-col gap-4">
                    <Logo color="white" />
                    <p className="text-center w-2/3 text-gray-100">
                        Employee Hub centralizes all your employee data, making
                        it easy to manage and track your workforce efficiently
                    </p>
                </div>
            </div>
            <div className="flex-1 h-full grid place-content-center">
                <LoginForm />
            </div>
        </div>
    );
}
