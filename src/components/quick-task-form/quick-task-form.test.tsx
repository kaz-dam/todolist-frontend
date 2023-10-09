import React from "react";
import { render } from "../../lib/test-utils";
import QuickTaskForm from "./quick-task-form";

test("renders without crashing", () => {
    render(<QuickTaskForm />);
});