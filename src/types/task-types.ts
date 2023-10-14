export type Task = {
    id: number;
    title: string;
    dueDate: Date;
    completed: boolean;
    order: number;
}

export type GetTasksResponse = Task[];

export type MarkCompletedResponse = {
    id: number;
    completed: boolean;
}

export type QuickTaskFormValues = {
    title: string;
    dueDate: Date;
    completed: boolean;
};

export type TaskFormValues = QuickTaskFormValues;