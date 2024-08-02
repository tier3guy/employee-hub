"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Inter({ subsets: ["latin"] });

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = "system" } = useTheme();

    return (
        <Sonner
            theme={theme as ToasterProps["theme"]}
            className={cn(
                "toaster group rounded-none text-base",
                font.className
            )}
            toastOptions={{
                classNames: {
                    toast: "group toast group-[.toaster]:bg-white group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg text-blue-600 rounded-none",
                    description:
                        "group-[.toast]:text-muted-foreground rounded-none",
                    actionButton:
                        "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground rounded-none",
                    cancelButton:
                        "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground rounded-none",
                },
            }}
            {...props}
            style={{
                borderRadius: 0,
            }}
        />
    );
};

export { Toaster };
