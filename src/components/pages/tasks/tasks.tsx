import React, { useCallback } from "react";
import FloatingButton from "../../ui/floating-button/floating-button";
import TaskWrapper from "../../task-wrapper/task-wrapper";
import useCreateTask from "../../../hooks/use-create-task";

const Tasks = () => {
    const createTask = useCreateTask();

    const handleFloatingButtonClick = useCallback(() => {
        console.log('Floating button clicked');
        // TODO: trigger task creation form
        // createTask.mutate('New task');
    }, [createTask]);

    return (
        <>
            <div className="flex flex-col items-center bg-white rounded-todo">
                <TaskWrapper />
                <FloatingButton onClick={handleFloatingButtonClick} />
            </div>
        </>
    );
};

export default Tasks;