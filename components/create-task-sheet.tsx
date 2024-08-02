import { SheetContent } from "@/components/ui/sheet";

export default function CreateTaskSheet() {
    return (
        <SheetContent>
            <div className="">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold text-blue-600">
                        Create Employee
                    </h1>
                    <p className="text-slate-500 text-sm w-2/3">
                        Effortlessly add new team members with our intuitive and
                        secure employee creation interface.
                    </p>
                </div>
            </div>
        </SheetContent>
    );
}
