import { useModal } from "@/providers/modal-provider";
import Logo from "./logo";

export default function EmptyTablePlaceholder() {
    const { setOpen } = useModal();

    return (
        <div className="absolute top-0 left-0 h-full w-full bg-white grid place-content-center">
            <div className="flex flex-col items-center">
                <Logo color="rgb(100 116 139)" />
                <p className="text-center mt-4 m-auto w-[300px] text-slate-500">
                    Oops! no data found into the database, please try{" "}
                    <span
                        className="text-blue-600 hover:underline hover:cursor-pointer"
                        onClick={() => setOpen(true)}
                    >
                        creating one
                    </span>
                </p>
            </div>
        </div>
    );
}
