import { useQuery } from "@tanstack/react-query";
import { useTaskService } from "../../contexts";

const useTasks = () => {
    const taskService = useTaskService();
    return useQuery({ queryKey: ['tasks'], queryFn: taskService.fetchTasks});
};

export default useTasks;