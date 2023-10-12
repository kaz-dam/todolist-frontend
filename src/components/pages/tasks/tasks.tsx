import React, { useCallback, useState } from "react";
import FloatingButton from "../../ui/floating-button/floating-button";
import TaskWrapper from "../../task-wrapper/task-wrapper";
import Dialog from "../../ui/dialog/dialog";
import CreateTaskForm from "../../create-task-form/create-task-form";

const Tasks = () => {
    const [ showDialog, setShowDialog ] = useState(false);

    const handleFloatingButtonClick = useCallback(() => {
        setShowDialog(true);
    }, []);

    const closeDialog = useCallback(() => {
        setShowDialog(false);
    }, []);

    return (
        <>
            <div className="flex flex-col items-center bg-white rounded-todo">
                <TaskWrapper />
                <FloatingButton onClick={handleFloatingButtonClick} />
                <Dialog open={showDialog} onClose={closeDialog}>
                    <CreateTaskForm closeDialog={closeDialog} showDialog={showDialog} />
                </Dialog>
            </div>
        </>
    );
};

export default Tasks;