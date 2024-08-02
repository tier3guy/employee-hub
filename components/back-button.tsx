import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();
    const goBack = () => {
        router.back();
    };

    return (
        <button
            onClick={goBack}
            className="h-8 w-8 bg-white/20 border grid place-content-center rounded-full"
        >
            <ArrowLeft className="text-gray-200" size={20} strokeWidth={1.5} />
        </button>
    );
}
