import React from "react";
import WidgetWrapper from "../../widget-wrapper/widget-wrapper";
import Widget from "../../widget/widget";

const Dashboard = () => {
    return (
        <>
            <WidgetWrapper>
                <Widget widgetTitle="Tasks">
                    <ul>
                        <li>First task</li>
                        <li>second task</li>
                    </ul>
                </Widget>
            </WidgetWrapper>
        </>
    );
};

export default Dashboard;