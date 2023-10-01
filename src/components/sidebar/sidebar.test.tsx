import React from "react";
import { render } from "../../lib/test-utils";
import Sidebar from "./sidebar";

test("renders without crashing", () => {
    render(<Sidebar />);
});