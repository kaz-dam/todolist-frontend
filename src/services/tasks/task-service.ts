import { HttpClient } from "..";
import { GetTasksResponse } from "../../types/task-types";

export default class TaskService {
    fetchTasks(): Promise<GetTasksResponse> {
        return HttpClient.get<GetTasksResponse>("/tasks");
    }
}