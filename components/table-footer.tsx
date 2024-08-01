import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    SkipBack,
} from "lucide-react";
import RowsFilter from "./rows-filter";
import { Button } from "./ui/button";

export default function TableFooter() {
    return (
        <div className="w-full flex items-center justify-between relative text-sm">
            <div className="flex items-center gap-2">
                <p>Rows per page</p>
                <RowsFilter />
            </div>
            <p className="text-slate-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Page 1 of 10
            </p>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        className="p-2 py-1 border-none"
                        disabled
                    >
                        <ChevronsLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        className="p-2 py-1 border-none"
                        disabled
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className="p-2 py-1 border-none">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="p-2 py-1 border-none">
                        <ChevronsRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
