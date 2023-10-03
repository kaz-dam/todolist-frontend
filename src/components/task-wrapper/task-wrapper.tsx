import React from "react";

type TaskWrapperProps = React.HTMLProps<HTMLDivElement>;

const TaskWrapper = ({ children, ...props }: TaskWrapperProps) => {
    return (
        <div className="flex flex-col items-center w-full bg-white divide-y divide-dashed" {...props}>
            {children}
        </div>
    );
};

export default TaskWrapper;