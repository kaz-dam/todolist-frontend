import React from "react";
import { render } from "../../../lib/test-utils";
import Dashboard from "./dashboard";

test("renders without crashing", () => {
    render(<Dashboard />);
});