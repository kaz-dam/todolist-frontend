import React, { useCallback, useEffect, useState } from "react";
import FloatingButton from "../../ui/floating-button/floating-button";
import Task from "../../ui/task";
import TaskWrapper from "../../task-wrapper/task-wrapper";
import { Task as TaskType } from "../../../types/task-types";
import { useTaskService } from "../../../contexts";

const Tasks = () => {
    const taskService = useTaskService();
    const [tasks, setTasks] = useState<TaskType[]>([]);

    useEffect(() => {
        if (tasks.length === 0) {
            taskService.fetchTasks()
                .then((tasks) => {
                    setTasks(tasks);
                });
        }
    }, [taskService, tasks]);
    
    const handleFloatingButtonClick = useCallback(() => {
        console.log('Floating button clicked');
    }, []);

    return (
        <>
            <div className="flex flex-col items-center bg-white rounded-todo">
                <TaskWrapper>
                    {tasks.map((task) => (
                        <Task key={task.id} taskTitle={task.title} deadLine={task.dueDate} completed={task.completed} onMarkCompleted={() => {}} />
                    ))}
                </TaskWrapper>
                <FloatingButton onClick={handleFloatingButtonClick} />
            </div>
        </>
    );
};

export default Tasks;