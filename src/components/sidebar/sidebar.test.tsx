import { render } from "@testing-library/react";
import Sidebar from "./sidebar";

test("renders without crashing", () => {
    render(<Sidebar />);
});