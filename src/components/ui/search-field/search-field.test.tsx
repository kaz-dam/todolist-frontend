import React from "react";
import { render } from "@testing-library/react";
import SearchField from "./search-field";

test("renders without crashing", () => {
    render(<SearchField />);
});