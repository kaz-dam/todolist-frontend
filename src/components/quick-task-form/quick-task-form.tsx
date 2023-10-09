import React from "react";
import { useForm } from "react-hook-form";

type QuickTaskFormValues = {
    title: string;
    dueDate: string;
    completed: boolean;
};

const QuickTaskForm = () => {
    const { register, handleSubmit, reset } = useForm<QuickTaskFormValues>({
        defaultValues: {
            title: '',
            dueDate: new Date().toLocaleDateString(),
            completed: false,
        }
    });

    const onSubmit = (data: QuickTaskFormValues) => {
        console.log(data);
        reset();
    };

    return (
        <>
            <form className="flex flex-row w-full px-[150px] py-4" onSubmit={handleSubmit(onSubmit)}>
                <input className="rounded-md py-2 px-3 border-2 border-todo-text focus:outline-none" placeholder="Add new" {...register('title', { required: true, minLength: 2 })} />
                <input type="hidden" {...register('dueDate')} />
                <input type="hidden" {...register('completed')} />
            </form>
        </>
    );
};

export default QuickTaskForm;