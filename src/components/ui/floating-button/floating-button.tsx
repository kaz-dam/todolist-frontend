import React from "react";
import { cn } from "../../../lib/utils";
import Icon from "../icon/icon";
import { useDialog } from "../../../contexts/dialog-context";

type FloatingButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, 'type'> & {
    className?: string;
};

const FloatingButton = ({ className, ...props }: FloatingButtonProps) => {
    const { openDialog } = useDialog();

    return (
        <button type="button" onClick={openDialog} className={cn('fixed z-0 right-16 bottom-16 rounded-full bg-todo-green shadow-lg', className)} {...props}>
            <Icon iconName="add" className="text-white p-4" />
        </button>
    );
};

export default FloatingButton;