import React from "react";
import { render } from "@testing-library/react";
import Tasks from "./tasks";

test("renders without crashing", () => {
    render(<Tasks />);
});