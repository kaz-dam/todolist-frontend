import { useQuery } from "react-query";
import { useTaskService } from "../../contexts";

const useTasks = () => {
    const taskService = useTaskService();
    return useQuery('tasks', taskService.fetchTasks);
};

export default useTasks;