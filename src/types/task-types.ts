export type Task = {
    id: number;
    title: string;
    due_date: Date;
    done: boolean;
    order: number;
}

export type GetTasksResponse = Task[];

export type MarkCompletedResponse = {
    id: number;
    done: boolean;
}

export type QuickTaskFormValues = {
    title: string;
    due_date: Date;
    completed: boolean;
};

export type TaskFormValues = QuickTaskFormValues;

export type UpdateTaskFormValues = QuickTaskFormValues & {
    id: number;
};