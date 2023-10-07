import { useQueryClient, useMutation } from "react-query";
import { useTaskService } from "../../contexts";
import { Task } from "../../types/task-types";

const useTaskCompleted = () => {
    const taskService = useTaskService();
    const queryClient = useQueryClient();

    return useMutation(taskService.markCompleted, {
        onMutate: async (newTask: Task) => {
            await queryClient.cancelQueries('tasks');

            queryClient.setQueryData('tasks', (oldData: any) => 
                oldData.map((task: Task) => task.id === newTask.id ? { ...task, completed: true } : task)
            );

            return { newTask };
        },
        onError: (error, newTask, context) => {
            queryClient.setQueryData('tasks', (oldData: any) => 
                oldData.map((task: Task) => task.id === context?.newTask.id ? { ...task, completed: false } : task)
            );
        },
        onSettled: () => {
            queryClient.invalidateQueries('tasks');
        }
    });
};

export default useTaskCompleted;