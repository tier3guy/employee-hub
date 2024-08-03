import AddEmployeeButton from "./buttons/add-employee-button";

export default function Topbar() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex items-start justify-between">
                <h1 className="font-bold text-3xl text-white">Welcome back!</h1>
                <AddEmployeeButton />
            </div>
            <p className="text-slate-100 w-4/5">
                {`Here's the list of all your employees for your
                        organization!`}
            </p>
        </div>
    );
}
