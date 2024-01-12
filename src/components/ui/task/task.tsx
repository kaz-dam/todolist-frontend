import React, { MouseEvent } from "react";
import Icon from "../icon";
import { cn } from "../../../lib/utils";
import useDeleteTask from "../../../hooks/use-delete-task";

type TaskProps = React.HTMLProps<HTMLDivElement> & {
    taskId: string;
    taskTitle: string;
    deadLine: Date;
    done?: boolean;
    className?: string;
    onMarkCompleted: () => void;
    onUpdateTask: () => void;
};

const Task = ({ taskId, taskTitle, deadLine, done, onMarkCompleted, onUpdateTask, className, ...props }: TaskProps) => {
    const { mutate } = useDeleteTask();

    const handleMarkCompleted = (e: MouseEvent) => {
        e.stopPropagation();
        onMarkCompleted();
    };

    const handleDrag = (e: MouseEvent) => {
        e.stopPropagation();
        console.log('dragged');
    }

    const handleDelete = (e: MouseEvent) => {
        e.stopPropagation();
        mutate(taskId);
    }

    return (
        <div className={cn("flex flex-row justify-between items-center w-full py-4 px-10 bg-white cursor-pointer", className)} onClick={onUpdateTask}>
            <div className="flex flex-row items-center gap-8 w-1/2">
                <Icon iconName="drag_indicator" className="text-todo-green cursor-grab" onClick={handleDrag} />
                <span onClick={handleMarkCompleted} className={`flex justify-center items-center cursor-pointer border-2 border-todo-green w-6 h-6 ${done && 'bg-todo-green text-white'}`}>
                    {done && <Icon iconName="check" className="text-white" />}
                </span>
                <h2 className="font-semibold text-lg">{taskTitle}</h2>
            </div>
            <span>{deadLine ? new Date(deadLine).toLocaleDateString() : "-"}</span>
            <Icon iconName="delete_forever" className=" text-red-600" onClick={handleDelete} />
        </div>
    );
};

export default Task;