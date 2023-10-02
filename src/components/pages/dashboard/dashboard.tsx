import React from "react";
import WidgetWrapper from "../../widget-wrapper/widget-wrapper";
import Widget from "../../widget/widget";
import WidgetHeader from "../../widget-header/widget-header";

const Dashboard = () => {
    return (
        <>
            <WidgetWrapper>
                <Widget widgetTitle="Tasks">
                    <WidgetHeader widgetTitle="Tasks" linkTo="/" />
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