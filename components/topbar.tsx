import AddEmployeeButton from "./add-employee-button";

export default function Topbar() {
    return (
        <div className="flex justify-between w-full">
            <div className="flex flex-col gap-1">
                <h1 className="font-bold text-3xl text-white">
                    Welcome back fella!
                </h1>
                <p className="text-slate-100">
                    {`Here's the list of all your employees for your
                        organization!`}
                </p>
            </div>
            <AddEmployeeButton />
        </div>
    );
}
