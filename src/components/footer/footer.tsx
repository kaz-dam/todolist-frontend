import React from "react";
import Icon from "../ui/icon/icon";

const Footer = () => {
    return (
        <footer className="sticky bottom-0 flex flex-row justify-end">
            <div className="flex align-middle">Made with <Icon iconName="favorite" className="text-todo-green ml-1" /></div>
        </footer>
    );
};

export default Footer;