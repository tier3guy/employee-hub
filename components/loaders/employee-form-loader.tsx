import { Skeleton } from "../ui/skeleton";

export default function EmployeeFormLoader() {
    return (
        <div className="w-full flex flex-col gap-8">
            <DetailSectionLoader />
            <DetailSectionLoader />
        </div>
    );
}

export function DetailSectionLoader() {
    return (
        <div className="flex flex-col">
            <p className="text-slate-500 text-xl font-medium pb-2 border-b-2">
                <Skeleton className="h-[25px] w-[300px] rounded bg-gray-200" />
            </p>
            <div className="flex items-center gap-4 mt-6">
                <div className="flex-1 grid w-full items-center gap-2">
                    <Skeleton className="h-[20px] w-[200px] bg-gray-200 rounded" />
                    <Skeleton className="h-[35px] w-full bg-gray-200 rounded" />
                </div>
                <div className="flex-1 grid w-full items-center gap-2">
                    <Skeleton className="h-[20px] w-[200px] bg-gray-200 rounded" />
                    <Skeleton className="h-[35px] w-full bg-gray-200 rounded" />
                </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
                <div className="flex-1 grid w-full items-center gap-2">
                    <Skeleton className="h-[20px] w-[200px] bg-gray-200 rounded" />
                    <Skeleton className="h-[35px] w-full bg-gray-200 rounded" />
                </div>
                <div className="flex-1 grid w-full items-center gap-2">
                    <Skeleton className="h-[20px] w-[200px] bg-gray-200 rounded" />
                    <Skeleton className="h-[35px] w-full bg-gray-200 rounded" />
                </div>
            </div>
        </div>
    );
}
