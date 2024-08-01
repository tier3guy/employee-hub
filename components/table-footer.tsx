import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";
import RowsFilter from "./rows-filter";
import { Button } from "./ui/button";
import { useEmployee } from "@/providers/employee-provider";

export default function TableFooter() {
    const { currentPage, changePage, totalPages } = useEmployee();

    return (
        <div className="w-full flex items-center justify-between relative text-sm">
            <div className="flex items-center gap-2">
                <p>Rows per page</p>
                <RowsFilter />
            </div>
            <p className="text-slate-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Page {currentPage} of {totalPages}
            </p>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        className="p-2 py-1 border-none"
                        disabled={currentPage <= 5}
                        onClick={() => {
                            changePage(currentPage - 5);
                        }}
                    >
                        <ChevronsLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        className="p-2 py-1 border-none"
                        disabled={currentPage === 1}
                        onClick={() => {
                            changePage(currentPage - 1);
                        }}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        className="p-2 py-1 border-none"
                        disabled={currentPage === totalPages}
                        onClick={() => {
                            changePage(currentPage + 1);
                        }}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        className="p-2 py-1 border-none"
                        disabled={currentPage + 5 >= totalPages}
                        onClick={() => {
                            changePage(currentPage + 5);
                        }}
                    >
                        <ChevronsRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
