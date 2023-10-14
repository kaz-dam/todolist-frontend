import React from "react";
import { useForm } from "react-hook-form";
import useCreateTask from "../../hooks/use-create-task/use-create-task";
import { QuickTaskFormValues } from "../../types/task-types";

const QuickTaskForm = () => {
    const { mutate } = useCreateTask();
    const { register, handleSubmit, reset } = useForm<QuickTaskFormValues>({
        defaultValues: {
            title: '',
            dueDate: new Date(),
            completed: false,
        }
    });

    const onSubmit = (data: QuickTaskFormValues) => {
        mutate({
            ...data,
            dueDate: data.dueDate
        });
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