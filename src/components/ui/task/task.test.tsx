import React from "react";
import { render } from "@testing-library/react";
import Task from "./task";

test("renders without crashing", () => {
    render(<Task taskTitle="This is a task" deadLine="today" onMarkCompleted={() => {}} />);
});