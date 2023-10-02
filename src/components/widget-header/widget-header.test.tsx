import React from "react";
import { render } from "../../lib/test-utils";
import WidgetHeader from "./widget-header";

test("renders without crashing", () => {
    render(<WidgetHeader widgetTitle="Some title" />);
});