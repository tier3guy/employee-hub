import EmployeeTable from "@/components/employee-table";
import Topbar from "@/components/topbar";
import EmployeeProvider from "@/providers/employee-provider";

export default function Page() {
    return (
        <div className="h-screen w-screen overflow-hidden relative">
            <div className="h-[40%] w-full absolute top-0 left-0 -z-10 bg-gradient-to-b from-blue-500 to-blue-700" />
            <div className="min-h-screen w-full overflow-x-hidden p-6">
                <Topbar />
                <div className="w-full my-6">
                    <EmployeeProvider>
                        <EmployeeTable />
                    </EmployeeProvider>
                </div>
            </div>
        </div>
    );
}
