import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useTaskService } from "../../contexts";
import { Task, QuickTaskFormValues } from "../../types/task-types";

const useCreateTask = () => {
    const taskService = useTaskService();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: taskService.createTask,
        mutationKey: ['tasks', 'create'],
        onMutate: async (newTask: QuickTaskFormValues) => {
            await queryClient.cancelQueries({ queryKey: ['tasks'] });

            const previousTasks = queryClient.getQueryData<Task[]>(['tasks']);
            queryClient.setQueryData(['tasks'], (oldData: any) => [
                ...oldData,
                newTask
            ]);

            return { previousTasks };
        },
        onError: (error, title, context) => {
            queryClient.setQueryData(['tasks'], context?.previousTasks);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks']});
        }
    });
};

export default useCreateTask;