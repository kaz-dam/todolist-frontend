import React from "react";
import Icon from "../icon";

type TaskProps = React.HTMLProps<HTMLDivElement> & {
    taskTitle: string;
    deadLine: string;
    completed?: boolean;
    onMarkCompleted: () => void;
};

const Task = ({ taskTitle, deadLine, completed, onMarkCompleted, ...props }: TaskProps) => {
    return (
        <div className="flex flex-row justify-between items-center w-full py-4 px-10 bg-white">
            <div className="flex flex-row justify-between items-center gap-8">
                <Icon iconName="drag_indicator" className="text-todo-green cursor-grab" />
                <span onClick={onMarkCompleted} className={`flex justify-center items-center cursor-pointer border-2 border-todo-green w-6 h-6 ${completed && 'bg-todo-green text-white'}`}>
                    {completed && <Icon iconName="check" className="text-white" />}
                </span>
                <h2 className="font-semibold text-lg">{taskTitle}</h2>
            </div>
            <span>{deadLine}</span>
        </div>
    );
};

export default Task;