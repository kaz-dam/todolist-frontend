import { cn } from "../../../lib/utils";

type SideBarMenuProps = React.HTMLProps<HTMLUListElement> & {
    className?: string;
};

const SideBarMenu = ({className, children, ...props}: SideBarMenuProps) => {
    return (
        <ul className={cn("flex flex-col justify-between gap-10", className)} {...props}>{children}</ul>
    );
};

export default SideBarMenu;