import React from "react";
import Icon from "../ui/icon";

const Sidebar = () => {
    return (
        <div className="w-[110px] bg-todo-green text-white py-10 flex flex-col items-center justify-between">
            <h3>YuDo</h3>
            <ul>
                <li><Icon iconName="dashboard" /></li>
                <li><Icon iconName="leaderboard" /></li>
                <li><Icon iconName="calendar_month" /></li>
            </ul>
            <div><Icon iconName="logout" /></div>
        </div>
    );
};

export default Sidebar;