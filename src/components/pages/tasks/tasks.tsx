import React, { useCallback } from "react";
import FloatingButton from "../../ui/floating-button/floating-button";
import Task from "../../ui/task";
import TaskWrapper from "../../task-wrapper/task-wrapper";

const Tasks = () => {
    
    const handleFloatingButtonClick = useCallback(() => {
        console.log('Floating button clicked');
    }, []);

    return (
        <>
            <div className="flex flex-col items-center bg-white rounded-todo">
                <TaskWrapper>
                    <Task taskTitle="Some task" deadLine="today" onMarkCompleted={() => {}} />
                    <Task taskTitle="Other task" deadLine="today" onMarkCompleted={() => {}} />
                    <Task taskTitle="Some other task" deadLine="tomorrow" onMarkCompleted={() => {}} />
                </TaskWrapper>
                <FloatingButton onClick={handleFloatingButtonClick} />
            </div>
        </>
    );
};

export default Tasks;