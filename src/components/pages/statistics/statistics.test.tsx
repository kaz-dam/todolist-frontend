import React from "react";
import { render } from "@testing-library/react";
import Statistics from "./statistics";

test("renders without crashing", () => {
    render(<Statistics />);
});