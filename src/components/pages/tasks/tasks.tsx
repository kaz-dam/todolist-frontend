import React from "react";
import FloatingButton from "../../ui/floating-button/floating-button";
import TaskWrapper from "../../task-wrapper/task-wrapper";
import Dialog from "../../ui/dialog/dialog";
import CreateTaskForm from "../../create-task-form/create-task-form";

const Tasks = () => {
    return (
        <>
            <div className="flex flex-col items-center bg-white rounded-todo">
                <TaskWrapper />
                <FloatingButton />
                <Dialog>
                    <CreateTaskForm />
                </Dialog>
            </div>
        </>
    );
};

export default Tasks;