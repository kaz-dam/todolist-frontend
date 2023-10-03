import React from "react";
import WidgetWrapper from "../../widget-wrapper/widget-wrapper";
import Widget from "../../widget/widget";
import WidgetHeader from "../../widget-header/widget-header";
import TaskWrapper from "../../task-wrapper/task-wrapper";
import Task from "../../ui/task";

const Dashboard = () => {
    return (
        <>
            <WidgetWrapper>
                <Widget widgetTitle="Tasks">
                    <WidgetHeader widgetTitle="Tasks" linkTo="/tasks" />
                    <TaskWrapper>
                        <Task taskTitle="Some task" deadLine="today" onMarkCompleted={() => {}} />
                        <Task taskTitle="Other task" deadLine="today" onMarkCompleted={() => {}} />
                        <Task taskTitle="Some other task" deadLine="tomorrow" onMarkCompleted={() => {}} />
                    </TaskWrapper>
                </Widget>
            </WidgetWrapper>
        </>
    );
};

export default Dashboard;