import React from "react";
import { render } from "@testing-library/react";
import TaskWrapper from "./task-wrapper";

test("renders without crashing", () => {
    render(<TaskWrapper>children</TaskWrapper>);
});