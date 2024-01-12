export type Task = {
    id: string;
    title: string;
    due_date: Date;
    done: boolean;
    order: number;
}

export type GetTasksResponse = Task[];

export type MarkCompletedResponse = {
    id: string;
    done: boolean;
}

export type QuickTaskFormValues = {
    title: string;
    due_date: Date;
    completed: boolean;
};

export type TaskFormValues = QuickTaskFormValues;

export type UpdateTaskFormValues = QuickTaskFormValues & {
    id: string;
};