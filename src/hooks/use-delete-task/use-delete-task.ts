import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useTaskService } from "../../contexts";
import { Task } from "../../types/task-types";

const useDeleteTask = () => {
    const taskService = useTaskService();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: taskService.deleteTask,
        mutationKey: ["tasks", "delete"],
        onMutate: async (taskId: string) => {
            await queryClient.cancelQueries({ queryKey: ["tasks"] });

            const previousTasks = queryClient.getQueryData<Task[]>(["tasks"]);

            queryClient.setQueryData(["tasks"], (oldData: any) =>
                oldData.filter((task: Task) => task.id !== taskId)
            );

            return { previousTasks };
        },
        onError: (error, taskId, context) => {
            queryClient.setQueryData(["tasks"], context?.previousTasks);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
        }
    });
};

export default useDeleteTask;