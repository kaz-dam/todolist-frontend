import React from "react";
import { MaterialIcon } from "material-icons";
import { cn } from "../../../lib/utils";

type IconProps = React.HTMLProps<HTMLSpanElement> & {
    iconName: MaterialIcon;
    className?: string;
};

const Icon = ({ className, iconName, ...props }: IconProps) => {
    return (
        <span className={cn("material-icons", className)} {...props}>{iconName}</span>
    );
}

export default Icon;