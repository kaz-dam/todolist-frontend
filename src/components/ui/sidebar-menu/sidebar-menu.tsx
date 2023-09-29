import React from "react";
import { cn } from "../../../lib/utils";

type SideBarMenuProps = React.HTMLProps<HTMLUListElement> & {
    className?: string;
};

const SideBarMenu = ({className, children, ...props}: SideBarMenuProps) => {
    return (
        <ul className={cn("flex md:flex-col flex-row justify-between gap-10", className)} {...props}>{children}</ul>
    );
};

export default SideBarMenu;