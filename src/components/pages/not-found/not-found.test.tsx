import React from "react";
import { render } from "@testing-library/react";
import NotFound from "./not-found";

test("renders without crashing", () => {
    render(<NotFound />);
});