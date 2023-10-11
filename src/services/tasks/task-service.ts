import { HttpClient } from "..";
import { GetTasksResponse, MarkCompletedResponse, Task, QuickTaskFormValues } from "../../types/task-types";

export default class TaskService {
    fetchTasks(): Promise<GetTasksResponse> {
        return HttpClient.get<GetTasksResponse>("/tasks");
    }

    markCompleted(task: Task): Promise<MarkCompletedResponse> {
        return HttpClient.post<MarkCompletedResponse, Task>(`/tasks/${task.id}/completed`, task);
    }

    createTask(newTask: QuickTaskFormValues): Promise<Task> {
        return HttpClient.post<Task, QuickTaskFormValues>("/tasks", newTask);
    }
}