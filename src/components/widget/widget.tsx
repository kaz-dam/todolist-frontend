import React, { ReactNode } from "react";
import { cn } from "../../lib/utils";

type WidgetProps = React.HTMLProps<HTMLDivElement> & {
    widgetTitle: string;
    children: ReactNode;
    className?: string;
};

const Widget = ({ widgetTitle, children, className, ...props }: WidgetProps) => {
    return (
        <div className={cn('flex flex-col bg-white rounded-todo p-10 shadow-sm', className)} {...props}>
            <div className="flex flex-row justify-between items-center">
                <h5>{widgetTitle}</h5>
                <button>more</button>
            </div>
            {children}
        </div>
    );
};

export default Widget;