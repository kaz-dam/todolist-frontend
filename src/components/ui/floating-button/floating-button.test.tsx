import React from "react";
import { render } from "../../../lib/test-utils";
import FloatingButton from "./floating-button";

test("renders without crashing", () => {
    render(<FloatingButton className="test" />);
});