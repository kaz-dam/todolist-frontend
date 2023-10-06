import React, { createContext, useContext, useMemo } from "react";
import TaskService from "../services/tasks";

const TaskServiceContext = createContext<TaskService | undefined>(undefined);

export const TaskServiceProvider = ({ children }: React.PropsWithChildren) => {
    const taskService = useMemo(() => new TaskService(), []);

    return (
        <TaskServiceContext.Provider value={taskService}>
            {children}
        </TaskServiceContext.Provider>
    );
};

export const useTaskService = () => {
    const context = useContext(TaskServiceContext);
    if (!context) {
        throw new Error('useTaskService must be used within a TaskServiceProvider');
    }
    return context;
};
