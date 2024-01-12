import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useTaskService } from "../../contexts";
import { Task, UpdateTaskFormValues } from "../../types/task-types";

const useUpdateTask = () => {
    const taskService = useTaskService();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: taskService.updateTask,
        mutationKey: ['tasks', 'update'],
        onMutate: async (newTask: UpdateTaskFormValues) => {
            await queryClient.cancelQueries({ queryKey: ['tasks'] });

            const previousTasks = queryClient.getQueryData<Task[]>(['tasks']);
            
            queryClient.setQueryData(['tasks'], (oldData: any) =>
                oldData.map((task: Task) => task.id === newTask.id ? { ...newTask } : task)
            );

            return { previousTasks };
        },
        onError: (error, newTask, context) => {
            queryClient.setQueryData(['tasks'], context?.previousTasks);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks']});
        }
    });
};

export default useUpdateTask;