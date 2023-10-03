import React, { ReactNode } from "react";
import { cn } from "../../lib/utils";

type WidgetWrapperProps = React.HTMLProps<HTMLDivElement> & {
    children: ReactNode;
    className?: string;
};

const WidgetWrapper = ({ className, children, ...props }: WidgetWrapperProps) => {
    return (
        <div className={cn('flex flex-col gap-4 lg:w-1/2 w-full py-5', className)} {...props}>
            {children}
        </div>
    );
};

export default WidgetWrapper;