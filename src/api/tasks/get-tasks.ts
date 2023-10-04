import httpClient from "../http-client";
import { GetTasksResponse } from "./types";

const getTasks = async (): Promise<GetTasksResponse> => {
    const response = await httpClient.get<GetTasksResponse>("/tasks");
    return response.data;
};

export default getTasks;