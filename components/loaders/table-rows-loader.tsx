import { TableCell, TableRow } from "../ui/table";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
    rows?: number;
}

export default function TableRowsLoader({ rows = 8 }: Props) {
    return (
        <>
            {Array.from("G".repeat(rows)).map((_, i) => {
                return <TableRowLoader key={i} />;
            })}
        </>
    );
}

export function TableRowLoader() {
    return (
        <TableRow className="w-full">
            <TableCell>
                <Skeleton className="h-[15px] bg-gray-200" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-[15px] bg-gray-200" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-[15px] bg-gray-200" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-[15px] bg-gray-200" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-[15px] bg-gray-200" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-[15px] bg-gray-200" />
            </TableCell>
            <TableCell>
                <Skeleton className="h-[15px] bg-gray-200" />
            </TableCell>
        </TableRow>
    );
}
