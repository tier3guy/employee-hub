"use client";

import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import DeleteEmployee from "@/actions/delete-employee";
import { useEmployee } from "@/providers/employee-provider";

export default function DeleteEmployeeDialog() {
    const router = useRouter();
    const { data } = useEmployee();

    const handleOnDelete = async () => {
        const resp = await DeleteEmployee(data?._id!);
        if (resp) {
            toast("Employee deleted successfully");
            router.push("/");
        } else {
            toast("Failed to delete employee");
        }
    };

    return (
        <Dialog>
            <DialogTrigger>
                <div className="rounded-none px-6 py-2 font-medium text-white w-[200px] text-base shadow-xl bg-red-600 hover:bg-red-500">
                    Delete
                </div>
            </DialogTrigger>
            <DialogContent className="rounded-none">
                <DialogHeader>
                    <h2 className="text-2xl text-blue-600 font-bold">
                        Are you absolutely sure?
                    </h2>
                    <p className="text-slate-500">
                        This action cannot be undone. This will permanently
                        delete this employee and remove your data from our
                        servers.
                    </p>
                </DialogHeader>
                <div className="">
                    <button
                        onClick={handleOnDelete}
                        className="text-red-500 hover:underline cursor-pointer"
                    >
                        Yes, I am Sure
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
