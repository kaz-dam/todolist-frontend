import React from "react";
import { render } from "./lib/test-utils";
import AppRoutes from "./AppRoutes";

test("renders without crashing", () => {
	render(<AppRoutes />);
});
