import React, { useState } from "react";
import Icon from "../icon";

type TaskProps = React.HTMLProps<HTMLDivElement> & {
    taskTitle: string;
    deadLine: string;
    onMarkCompleted: () => void;
};

const Task = ({ taskTitle, deadLine, onMarkCompleted, ...props }: TaskProps) => {
    const [ isCompleted, setIsCompleted ] = useState(false);

    const markCompleted = () => {
        setIsCompleted(true);
        onMarkCompleted();
    };

    return (
        <div className="flex flex-row justify-between items-center w-full py-4 px-10 bg-white">
            <div className="flex flex-row justify-between items-center gap-8">
                <Icon iconName="drag_indicator" className="text-todo-green cursor-grab" />
                <span onClick={markCompleted} className={`block border-2 border-todo-green w-6 h-6 `}></span>
                <h2 className="font-semibold text-lg">{taskTitle}</h2>
            </div>
            <span>{deadLine}</span>
        </div>
    );
};

export default Task;