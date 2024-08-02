import EmployeeProvider from "@/providers/employee-provider";

export default function EmployeeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <EmployeeProvider>{children}</EmployeeProvider>;
}
