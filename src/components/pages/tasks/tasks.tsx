import React, { useCallback } from "react";
import { useQueryClient } from "react-query";
import FloatingButton from "../../ui/floating-button/floating-button";
import Task from "../../ui/task";
import TaskWrapper from "../../task-wrapper/task-wrapper";
import useTasks from "../../../hooks/use-tasks";

const Tasks = () => {
    const queryClient = useQueryClient();
    const { data: tasks, isLoading, isError } = useTasks();
    
    const handleFloatingButtonClick = useCallback(() => {
        console.log('Floating button clicked');
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    return (
        <>
            <div className="flex flex-col items-center bg-white rounded-todo">
                <TaskWrapper>
                    {tasks && tasks.map((task) => (
                        <Task key={task.id} taskTitle={task.title} deadLine={task.dueDate} completed={task.completed} onMarkCompleted={() => {}} />
                    ))}
                </TaskWrapper>
                <FloatingButton onClick={handleFloatingButtonClick} />
            </div>
        </>
    );
};

export default Tasks;