import React from "react";
import { Link } from "react-router-dom";
import Icon from "../ui/icon";
import { cn } from "../../lib/utils";

type WidgetHeaderProps = React.HTMLProps<HTMLDivElement> & {
    widgetTitle: string;
    linkTo: string;
    className?: string;
};

const WidgetHeader = ({widgetTitle, linkTo, className, ...props }: WidgetHeaderProps) => {
    return (
        <div className={cn('flex flex-row justify-between items-center pb-3', className)}>
            <h5 className="font-semibold text-lg">{widgetTitle}</h5>
            <Link to={linkTo} className="flex flex-row items-center text-md"><span className="text-todo-green">See all</span><Icon iconName="arrow_right" className="text-todo-green" /></Link>
        </div>
    );
};

export default WidgetHeader;