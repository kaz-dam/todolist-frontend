import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./dashboard";

test("renders without crashing", () => {
    render(<Dashboard />);
});