import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useTaskService } from "../../contexts";
import { Task, MarkCompletedResponse } from "../../types/task-types";

const useTaskCompleted = () => {
    const taskService = useTaskService();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: taskService.markCompleted,
        mutationKey: ['tasks', 'completed'],
        onMutate: async (newTask: MarkCompletedResponse) => {
            await queryClient.cancelQueries({ queryKey: ['tasks'] });

            const previousTasks = queryClient.getQueryData<Task[]>(['tasks']);

            queryClient.setQueryData(['tasks'], (oldData: any) =>
                oldData.map((task: Task) => task.id === newTask.id ? { ...task, completed: newTask.done } : task)
            );

            return { previousTasks, newTask };
        },
        onError: (error, newTask, context) => {
            queryClient.setQueryData(['tasks'], context?.previousTasks);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks']});
        }
    });
};

export default useTaskCompleted;