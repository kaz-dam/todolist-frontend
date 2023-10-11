import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import FloatingButton from "../../ui/floating-button/floating-button";
import TaskWrapper from "../../task-wrapper/task-wrapper";
import Dialog from "../../ui/dialog/dialog";

const Tasks = () => {
    const [ showDialog, setShowDialog ] = useState(false);
    const { register, handleSubmit, reset } = useForm<any>({
        defaultValues: {
            title: '',
            dueDate: '',
            completed: false,
        }
    });

    const handleFloatingButtonClick = useCallback(() => {
        setShowDialog(true);
    }, []);

    const closeDialog = useCallback(() => {
        setShowDialog(false);
        reset();
    }, [reset]);

    const onSubmit = (data: any) => {
        console.log(data);
        closeDialog();
    };

    return (
        <>
            <div className="flex flex-col items-center bg-white rounded-todo">
                <TaskWrapper />
                <FloatingButton onClick={handleFloatingButtonClick} />
                <Dialog open={showDialog} onClose={closeDialog}>
                    <form className="flex flex-col gap-10 w-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative">
                            <span className="absolute -top-3 left-3 bg-white px-2">Task</span>
                            <input className="w-full rounded-md py-3 px-3 border-2 border-todo-text focus:outline-none" {...register('title', { required: true, minLength: 2 })} />
                        </div>
                        <div className="relative">
                            <span className="absolute -top-3 left-3 bg-white px-2">Date</span>
                            <input className="w-full rounded-md py-3 px-3 border-2 border-todo-text focus:outline-none" type="date" {...register('dueDate')} />
                        </div>
                        <input type="hidden" {...register('completed')} />
                        <div className="flex flex-row justify-end gap-5">
                            <button onClick={closeDialog} className="w-1/4 rounded-md bg-white text-todo-text border-2 border-todo-text px-4 py-2">Cancel</button>
                            <button className="w-1/4 rounded-md bg-todo-text border-2 border-todo-text text-white px-4 py-2" type="submit">Add</button>
                        </div>
                    </form>
                </Dialog>
            </div>
        </>
    );
};

export default Tasks;