import { HttpClient } from "..";
import { GetTasksResponse } from "../../types/task-types";

export default class TaskService {
    fetchTasks(): Promise<GetTasksResponse> {
        return HttpClient.get<GetTasksResponse>("/tasks");
    }

    markCompleted(id: number): Promise<Omit<GetTasksResponse, 'title' | 'dueDate' | 'order'>> {
        return HttpClient.post<Omit<GetTasksResponse, 'title' | 'dueDate' | 'order'>, void>(`/tasks/${id}/completed`);
    }
}