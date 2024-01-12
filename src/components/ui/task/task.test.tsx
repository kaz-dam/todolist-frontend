import React from "react";
import { render } from "@testing-library/react";
import Task from "./task";

test("renders without crashing", () => {
    render(<Task taskId="dsfs98z-sdgfdg4534-dfgh67df-sdgfsfg34wdf2" taskTitle="This is a task" deadLine={new Date()} onMarkCompleted={() => {}} onUpdateTask={() => {}} />);
});