import { render } from "@testing-library/react";
import SideBarMenu from "./sidebar-menu";

test("renders without crashing", () => {
    render(<SideBarMenu />);
});