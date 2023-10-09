import React from "react";
import { render } from "../../lib/test-utils";
import TaskWrapper from "./task-wrapper";

test("renders without crashing", () => {
    render(<TaskWrapper>children</TaskWrapper>);
});