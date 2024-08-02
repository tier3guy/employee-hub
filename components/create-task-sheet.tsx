import { SheetContent } from "@/components/ui/sheet";
import CreateEmployeeForm from "./forms/create-employee-form";

export default function CreateTaskSheet() {
    return (
        <SheetContent className="p-0">
            <div className="h-full overflow-y-auto" id="create_form_sheet">
                <div className="flex flex-col gap-1 p-6 pb-0">
                    <h1 className="text-2xl font-bold text-blue-600">
                        Create Employee
                    </h1>
                    <p className="text-slate-500 text-sm w-2/3">
                        Effortlessly add new team members with our intuitive and
                        secure employee creation interface.
                    </p>
                </div>
                <div className="my-4 p-6 pt-0">
                    <CreateEmployeeForm />
                </div>
            </div>
        </SheetContent>
    );
}
