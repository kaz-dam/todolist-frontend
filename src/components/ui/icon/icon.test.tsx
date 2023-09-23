import { render } from "@testing-library/react";
import Icon from "./icon";

test("renders without crashing", () => {
    render(<Icon iconName="dashboard" />);
});