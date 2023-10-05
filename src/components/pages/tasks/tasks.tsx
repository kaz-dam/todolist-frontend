import React, { useCallback, useEffect, useState } from "react";
import FloatingButton from "../../ui/floating-button/floating-button";
import Task from "../../ui/task";
import TaskWrapper from "../../task-wrapper/task-wrapper";
import { getTasks } from "../../../api/tasks";
import { Task as TaskType } from "../../../api/tasks/types";

const Tasks = () => {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    useEffect(() => {
        getTasks().then((tasks) => {
            setTasks(tasks);
        });
    }, []);
    
    const handleFloatingButtonClick = useCallback(() => {
        console.log('Floating button clicked');
    }, []);

    return (
        <>
            <div className="flex flex-col items-center bg-white rounded-todo">
                <TaskWrapper>
                    {tasks.map((task) => (
                        <Task taskTitle={task.title} deadLine={task.dueDate} completed={task.completed} onMarkCompleted={() => {}} />
                    ))}
                </TaskWrapper>
                <FloatingButton onClick={handleFloatingButtonClick} />
            </div>
        </>
    );
};

export default Tasks;