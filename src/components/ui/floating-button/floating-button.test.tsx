import React from "react";
import { render } from "@testing-library/react";
import FloatingButton from "./floating-button";

test("renders without crashing", () => {
    render(<FloatingButton onClick={() => {}} className="test" />);
});