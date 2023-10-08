import React, { useCallback } from "react";
import FloatingButton from "../../ui/floating-button/floating-button";
import TaskWrapper from "../../task-wrapper/task-wrapper";

const Tasks = () => {    
    const handleFloatingButtonClick = useCallback(() => {
        console.log('Floating button clicked');
    }, []);

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