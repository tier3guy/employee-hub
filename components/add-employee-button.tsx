import { useModal } from "@/providers/modal-provider";
import { UserPlus } from "lucide-react";

export default function AddEmployeeButton() {
    const { setOpen } = useModal();
    const addEmployee = () => {
        setOpen(true);
    };

    return (
        <button
            onClick={addEmployee}
            className="h-10 w-10 bg-white/20 border grid place-content-center rounded-full"
        >
            <UserPlus className="text-gray-200" size={20} strokeWidth={1.5} />
        </button>
    );
}
