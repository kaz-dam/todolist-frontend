import React from "react";
import { Link } from "react-router-dom";
import Icon from "../ui/icon";
import SideBarMenu from "../ui/sidebar-menu/sidebar-menu";

const Sidebar = () => {
    return (
        <div className="md:w-[110px] w-full md:h-auto bg-todo-green text-white md:py-10 py-4 md:px-0 px-4 flex md:flex-col flex-row items-center justify-between">
            <Link to="/"><h3 className="">YuDo</h3></Link>
            <SideBarMenu>
                <li><Link to="/"><Icon iconName="dashboard" /></Link></li>
                <li><Link to="/tasks"><Icon iconName="task" /></Link></li>
                <li><Link to="/statistics"><Icon iconName="leaderboard" /></Link></li>
                <li><Link to="/calendar"><Icon iconName="calendar_month" /></Link></li>
            </SideBarMenu>
            <div><Icon iconName="logout" /></div>
        </div>
    );
};

export default Sidebar;