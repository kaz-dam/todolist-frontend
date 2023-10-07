import { HttpClient } from "..";
import { GetTasksResponse, MarkCompletedResponse, Task } from "../../types/task-types";

export default class TaskService {
    fetchTasks(): Promise<GetTasksResponse> {
        return HttpClient.get<GetTasksResponse>("/tasks");
    }

    markCompleted(task: Task): Promise<MarkCompletedResponse> {
        return HttpClient.post<MarkCompletedResponse, void>(`/tasks/${task.id}/completed`);
    }
}