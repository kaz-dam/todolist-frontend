import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useTaskService } from "../../contexts";
import { Task } from "../../types/task-types";

const useCreateTask = () => {
    const taskService = useTaskService();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: taskService.createTask,
        mutationKey: ['tasks', 'create'],
        onMutate: async (title: string) => {
            await queryClient.cancelQueries({ queryKey: ['tasks'] });

            const previousTasks = queryClient.getQueryData<Task[]>(['tasks']);
            queryClient.setQueryData(['tasks'], (oldData: any) => [
                ...oldData,
                {
                    id: Math.floor(Math.random() * 100),
                    title,
                    completed: false,
                    dueDate: new Date().toLocaleString(),
                    order: oldData.length + 1
                }]);

            return { previousTasks };
        },
        onError: (error, title, context) => {
            queryClient.setQueryData(['tasks'], context?.previousTasks);
        },
        onSettled: () => {
            // queryClient.invalidateQueries({ queryKey: ['tasks']});
        }
    });
};

export default useCreateTask;