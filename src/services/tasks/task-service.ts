import { HttpClient } from "..";
import { GetTasksResponse, MarkCompletedResponse, Task, QuickTaskFormValues, UpdateTaskFormValues } from "../../types/task-types";

export default class TaskService {
    fetchTasks(): Promise<GetTasksResponse> {
        return HttpClient.get<GetTasksResponse>("/tasks");
    }

    markCompleted(task: Task): Promise<MarkCompletedResponse> {
        return HttpClient.put<MarkCompletedResponse, Task>(`/tasks/${task.id}`, task);
    }

    createTask(newTask: QuickTaskFormValues): Promise<Task> {
        return HttpClient.post<Task, QuickTaskFormValues>("/tasks", newTask);
    }

    updateTask(task: UpdateTaskFormValues): Promise<Task> {
        return HttpClient.put<Task, UpdateTaskFormValues>(`/tasks/${task.id}`, task);
    }

    deleteTask(taskId: string): Promise<Task> {
        return HttpClient.delete<Task>(`/tasks/${taskId}`);
    }
}