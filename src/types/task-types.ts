export type Task = {
    id: number;
    title: string;
    dueDate: string;
    completed: boolean;
    order: number;
}

export type GetTasksResponse = Task[];