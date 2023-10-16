import React, { createContext, useState, useContext } from "react";

type DialogContextType = {
    open: boolean;
    closeDialog: () => void;
    openDialog: () => void;
};

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const DialogProvider = ({ children }: React.PropsWithChildren<any>) => {
    const [ open, setOpen ] = useState(false);

    const closeDialog = () => {
        setOpen(false);
    };

    const openDialog = () => {
        setOpen(true);
    };

    const value = {
        open,
        closeDialog,
        openDialog
    };

    return (
        <DialogContext.Provider value={value}>
            {children}
        </DialogContext.Provider>
    );
};

export const useDialog = () => {
    const dialogContext = useContext(DialogContext);
    if (!dialogContext) {
        throw new Error('useTaskService must be used within a TaskServiceProvider');
    }

    return dialogContext;
}