import React from "react";
import { render } from "../../lib/test-utils";
import Widget from "./widget";

test("renders without crashing", () => {
    render(
        <Widget widgetTitle="Some title">
            <span>some children</span>
        </Widget>
    );
});