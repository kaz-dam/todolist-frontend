import React, { useCallback } from "react";
import FloatingButton from "../../ui/floating-button/floating-button";
import Icon from "../../ui/icon/icon";
import { Task } from "../../ui/task";

const Tasks = () => {
    
    const handleFloatingButtonClick = useCallback(() => {
        console.log('Floating button clicked');
    }, []);

    return (
        <>
            <div className="flex flex-col items-center bg-white rounded-todo divide-y divide-dashed">
                <Task taskTitle="Some task" deadLine="today" onMarkCompleted={() => {}} />
                <div className="flex flex-row justify-between items-center w-full py-4 px-10 bg-white">
                    <div className="flex flex-row justify-between items-center gap-8">
                        <Icon iconName="drag_indicator" className="text-todo-green" />
                        <span className="block border-2 border-todo-green w-6 h-6"></span>
                        <h2 className="font-semibold text-lg">Other task</h2>
                    </div>
                    <span>tomorrow</span>
                </div>
                <div className="flex flex-row justify-between items-center w-full py-4 px-10 bg-white">
                    <div className="flex flex-row justify-between items-center gap-8">
                        <Icon iconName="drag_indicator" className="text-todo-green" />
                        <span className="block border-2 border-todo-green w-6 h-6"></span>
                        <h2 className="font-semibold text-lg">Some other task</h2>
                    </div>
                    <span>today</span>
                </div>
                <FloatingButton onClick={handleFloatingButtonClick} />
            </div>
        </>
    );
};

export default Tasks;