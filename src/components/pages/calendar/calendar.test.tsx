import React from "react";
import { render } from "@testing-library/react";
import Calendar from "./calendar";

test("renders without crashing", () => {
    render(<Calendar />);
});