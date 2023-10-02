import React from "react";
import { render } from "../../lib/test-utils";
import WidgetWrapper from "./widget-wrapper";

test("renders without crashing", () => {
    render(
        <WidgetWrapper>
            <span>some children</span>
        </WidgetWrapper>
    );
});