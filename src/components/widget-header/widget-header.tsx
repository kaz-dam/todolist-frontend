import React from "react";
import { cn } from "../../lib/utils";

type WidgetHeaderProps = React.HTMLProps<HTMLDivElement> & {
    widgetTitle: string;
    className?: string;
};

const WidgetHeader = ({widgetTitle, className, ...props }: WidgetHeaderProps) => {
    return (
        <div className={cn('flex flex-row justify-between items-center pb-3', className)}>
            <h5 className="font-semibold text-lg">{widgetTitle}</h5>
            <button>more</button>
        </div>
    );
};

export default WidgetHeader;