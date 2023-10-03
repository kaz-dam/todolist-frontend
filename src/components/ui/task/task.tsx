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
        setIsCompleted(!isCompleted);
        onMarkCompleted();
    };

    return (
        <div className="flex flex-row justify-between items-center w-full py-4 px-10 bg-white">
            <div className="flex flex-row justify-between items-center gap-8">
                <Icon iconName="drag_indicator" className="text-todo-green cursor-grab" />
                <span onClick={markCompleted} className={`flex justify-center items-center cursor-pointer border-2 border-todo-green w-6 h-6 ${isCompleted && 'bg-todo-green text-white'}`}>
                    {isCompleted && <Icon iconName="check" className="text-white" />}
                </span>
                <h2 className="font-semibold text-lg">{taskTitle}</h2>
            </div>
            <span>{deadLine}</span>
        </div>
    );
};

export default Task;