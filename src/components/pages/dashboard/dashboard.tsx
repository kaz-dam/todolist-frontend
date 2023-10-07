import React from "react";
import { useQueryClient } from "react-query";
import WidgetWrapper from "../../widget-wrapper/widget-wrapper";
import Widget from "../../widget/widget";
import WidgetHeader from "../../widget-header/widget-header";
import TaskWrapper from "../../task-wrapper/task-wrapper";
import Task from "../../ui/task";
import useTasks from "../../../hooks/use-tasks";

const Dashboard = () => {
    const { data: tasks, isLoading, isError } = useTasks();
    const queryClient = useQueryClient();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    return (
        <>
            <WidgetWrapper>
                <Widget widgetTitle="Tasks">
                    <WidgetHeader widgetTitle="Tasks" linkTo="/tasks" />
                    <TaskWrapper>
                        {tasks && tasks.map((task) => (
                            <Task key={task.id} taskTitle={task.title} deadLine={task.dueDate} completed={task.completed} onMarkCompleted={() => {}} />
                        ))}
                    </TaskWrapper>
                </Widget>
            </WidgetWrapper>
        </>
    );
};

export default Dashboard;