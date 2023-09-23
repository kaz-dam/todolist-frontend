import React from "react";
import { cn } from "../../../lib/utils";

type IconProps = React.HTMLProps<HTMLSpanElement> & {
    iconName: string;
    className?: string;
};

const Icon = ({ className, iconName, ...props }: IconProps) => {
    return (
        <span className={cn("material-icons", className)} {...props}>{iconName}</span>
    );
}

export default Icon;