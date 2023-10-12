import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

type CreateTaskFormProps = {
    showDialog: boolean;
    closeDialog: () => void;
};

const CreateTaskForm = ({ closeDialog, showDialog, ...props}: CreateTaskFormProps) => {
    const { register, handleSubmit, reset } = useForm<any>({
        defaultValues: {
            title: '',
            dueDate: '',
            completed: false,
        }
    });

    const onSubmit = (data: any) => {
        console.log(data);
        closeDialog();
    };

    useEffect(() => {
        if (!showDialog) {
            reset();
        }
    }, [showDialog, reset]);

    return (
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
    );
};

export default CreateTaskForm;