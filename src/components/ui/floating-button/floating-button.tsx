import React from "react";
import { cn } from "../../../lib/utils";
import Icon from "../icon/icon";

type FloatingButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, 'type'> & {
    onClick: () => void;
    className?: string;
};

const FloatingButton = ({ className, onClick, ...props }: FloatingButtonProps) => {
    return (
        <button type="button" onClick={onClick} className={cn('fixed right-16 bottom-16 rounded-full bg-todo-green shadow-lg', className)} {...props}>
            <Icon iconName="add" className="text-white p-4" />
        </button>
    );
};

export default FloatingButton;