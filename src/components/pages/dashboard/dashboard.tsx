import React, { useEffect, useState } from "react";
import WidgetWrapper from "../../widget-wrapper/widget-wrapper";
import Widget from "../../widget/widget";
import WidgetHeader from "../../widget-header/widget-header";
import TaskWrapper from "../../task-wrapper/task-wrapper";
import Task from "../../ui/task";
import { getTasks } from "../../../api/tasks";
import { Task as TaskType } from "../../../api/tasks/types";

const Dashboard = () => {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    useEffect(() => {
        getTasks().then((tasks) => {
            setTasks(tasks);
        });
    }, []);

    return (
        <>
            <WidgetWrapper>
                <Widget widgetTitle="Tasks">
                    <WidgetHeader widgetTitle="Tasks" linkTo="/tasks" />
                    <TaskWrapper>
                        {tasks.map((task) => (
                            <Task taskTitle={task.title} deadLine={task.dueDate} completed={task.completed} onMarkCompleted={() => {}} />
                        ))}
                    </TaskWrapper>
                </Widget>
            </WidgetWrapper>
        </>
    );
};

export default Dashboard;