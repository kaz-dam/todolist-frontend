import React from "react";
import { render } from "../../lib/test-utils";
import CreateTaskForm from "./create-task-form";

test("renders without crashing", () => {
    render(<CreateTaskForm />);
});