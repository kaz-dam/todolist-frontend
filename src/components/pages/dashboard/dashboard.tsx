import React, { useEffect, useState } from "react";
import WidgetWrapper from "../../widget-wrapper/widget-wrapper";
import Widget from "../../widget/widget";
import WidgetHeader from "../../widget-header/widget-header";
import TaskWrapper from "../../task-wrapper/task-wrapper";
import Task from "../../ui/task";
import { useTaskService } from "../../../contexts";
import { Task as TaskType } from "../../../types/task-types";

const Dashboard = () => {
    const taskService = useTaskService();
    const [ tasks, setTasks ] = useState<TaskType[]>([]);

    useEffect(() => {
        if (tasks.length === 0) {
            taskService.fetchTasks()
                .then((tasksResponse: TaskType[]) => {
                    setTasks(tasksResponse);
                });
        }
    }, [taskService, tasks]);

    return (
        <>
            <WidgetWrapper>
                <Widget widgetTitle="Tasks">
                    <WidgetHeader widgetTitle="Tasks" linkTo="/tasks" />
                    <TaskWrapper>
                        {tasks.map((task) => (
                            <Task key={task.id} taskTitle={task.title} deadLine={task.dueDate} completed={task.completed} onMarkCompleted={() => {}} />
                        ))}
                    </TaskWrapper>
                </Widget>
            </WidgetWrapper>
        </>
    );
};

export default Dashboard;