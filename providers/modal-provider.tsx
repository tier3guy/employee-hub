"use client";

import { createContext, useContext, useState } from "react";

interface ModalContextInterface {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextInterface | null>(null);

export default function ModalProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <ModalContext.Provider
            value={{
                open,
                setOpen,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within an ModalProvider");
    }
    return context;
};
