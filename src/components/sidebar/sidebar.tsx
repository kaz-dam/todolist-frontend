import React from "react";
import Icon from "../ui/icon";
import SideBarMenu from "../ui/sidebar-menu/sidebar-menu";

const Sidebar = () => {
    return (
        <div className="md:w-[110px] w-full md:h-auto bg-todo-green text-white md:py-10 py-4 md:px-0 px-4 flex md:flex-col flex-row items-center justify-between">
            <h3 className="">YuDo</h3>
            <SideBarMenu>
                <li><Icon iconName="dashboard" /></li>
                <li><Icon iconName="leaderboard" /></li>
                <li><Icon iconName="calendar_month" /></li>
            </SideBarMenu>
            <div><Icon iconName="logout" /></div>
        </div>
    );
};

export default Sidebar;