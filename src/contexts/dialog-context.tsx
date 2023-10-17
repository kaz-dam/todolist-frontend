import React, { createContext, useState, useContext } from "react";
import { Task } from "../types/task-types";

type DialogContextType = {
    open: boolean;
    closeDialog: () => void;
    openDialog: () => void;
    openDialogWithTask: (task: Task) => void;
    openedTask: Task | undefined;
};

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const DialogProvider = ({ children }: React.PropsWithChildren<any>) => {
    const [ open, setOpen ] = useState<boolean>(false);
    const [ openedTask, setOpenedTask ] = useState<Task | undefined>(undefined);

    const closeDialog = (): void => {
        setOpen(false);
    };

    const openDialog = (): void => {
        setOpen(true);
    };

    const openDialogWithTask = (task: Task): void => {
        setOpen(true);
        setOpenedTask(task);
    };

    const value = {
        open,
        closeDialog,
        openDialog,
        openDialogWithTask,
        openedTask
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