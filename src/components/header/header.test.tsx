import React from "react";
import { render } from "@testing-library/react";
import Header from "./header";

test("renders without crashing", () => {
    render(<Header siteTitle="Dash" />);
});