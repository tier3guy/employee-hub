import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import ModalProvider from "@/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Employee Hub",
    description:
        "Employee Hub is a comprehensive employee management system designed to streamline and optimize HR processes. This application allows administrators to manage employee data efficiently, track employee performance, and handle other HR-related tasks seamlessly.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Toaster className="rounded-none text-blue-600 text-base bg-white" />
                <ModalProvider>{children}</ModalProvider>
            </body>
        </html>
    );
}
