import React, { MouseEvent } from "react";
import Icon from "../icon";
import { cn } from "../../../lib/utils";

type TaskProps = React.HTMLProps<HTMLDivElement> & {
    taskTitle: string;
    deadLine: Date;
    completed?: boolean;
    className?: string;
    onMarkCompleted: () => void;
    onUpdateTask: () => void;
};

const Task = ({ taskTitle, deadLine, completed, onMarkCompleted, onUpdateTask, className, ...props }: TaskProps) => {

    const handleMarkCompleted = (e: MouseEvent) => {
        e.stopPropagation();
        onMarkCompleted();
    };

    const handleDrag = (e: MouseEvent) => {
        e.stopPropagation();
        console.log('dragged');
    }

    return (
        <div className={cn("flex flex-row justify-between items-center w-full py-4 px-10 bg-white cursor-pointer", className)} onClick={onUpdateTask}>
            <div className="flex flex-row justify-between items-center gap-8">
                <Icon iconName="drag_indicator" className="text-todo-green cursor-grab" onClick={handleDrag} />
                <span onClick={handleMarkCompleted} className={`flex justify-center items-center cursor-pointer border-2 border-todo-green w-6 h-6 ${completed && 'bg-todo-green text-white'}`}>
                    {completed && <Icon iconName="check" className="text-white" />}
                </span>
                <h2 className="font-semibold text-lg">{taskTitle}</h2>
            </div>
            <span>{new Date(deadLine).toLocaleDateString()}</span>
        </div>
    );
};

export default Task;