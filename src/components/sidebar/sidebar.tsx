import React from "react";
import Icon from "../ui/icon";

const Sidebar = () => {
    return (
        <div className="w-[110px] bg-todo-green text-white py-10 flex flex-col items-center justify-between">
            <h3>YuDo</h3>
            <ul>
                <li><Icon /></li>
                <li>Profile</li>
                <li>Settings</li>
            </ul>
            <div>Logout</div>
        </div>
    );
};

export default Sidebar;