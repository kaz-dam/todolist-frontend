import React from "react";
import Task from "../ui/task";
import useTasks from "../../hooks/use-tasks";
import useTaskCompleted from "../../hooks/use-task-completed";
import { Task as TaskType } from "../../types/task-types";
import QuickTaskForm from "../quick-task-form/quick-task-form";
import { useDialog } from "../../contexts";

type TaskWrapperProps = React.HTMLProps<HTMLDivElement>;

const TaskWrapper = ({ ...props }: TaskWrapperProps) => {
    const { data: tasks, isLoading, isError } = useTasks();
    const markTaskCompleted = useTaskCompleted();
    const { openDialogWithTask } = useDialog();

    const handleMarkCompleted = async (task: TaskType) => {
        markTaskCompleted.mutate(task);
    }

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    return (
        <div className="flex flex-col items-center w-full bg-white divide-y divide-dashed" {...props}>
            {tasks && tasks.map((task) => (
                <Task key={task.id} taskTitle={task.title} deadLine={task.dueDate} completed={task.completed} onMarkCompleted={() => handleMarkCompleted({...task, completed: !task.completed})} onUpdateTask={() => openDialogWithTask(task)} />
            ))}
            <QuickTaskForm />
        </div>
    );
};

export default TaskWrapper;