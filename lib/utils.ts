import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function generateEmployeeId(): string {
    const prefix = "EMP";
    const suffix = Array.from({ length: 9 }, () =>
        Math.floor(Math.random() * 10)
    ).join("");
    return prefix + suffix;
}
