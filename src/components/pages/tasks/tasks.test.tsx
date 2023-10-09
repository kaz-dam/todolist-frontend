import React from "react";
import { render } from "../../../lib/test-utils";
import Tasks from "./tasks";

test("renders without crashing", () => {
    render(<Tasks />);
});