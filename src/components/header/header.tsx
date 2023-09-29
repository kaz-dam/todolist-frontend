import React from "react";
import SearchField from "../ui/search-field/search-field";
import Icon from "../ui/icon/icon";

type HeaderProps = React.HTMLProps<HTMLElement> & {
    siteTitle: string;
};

const Header = ({ siteTitle, ...props }: HeaderProps) => {
    return (
        <header className="flex flex-row justify-between sticky top-0 pt-2 pb-4 px-12" {...props}>
            <h1 className="font-semibold text-4xl text-todo-green">{siteTitle}</h1>
            <SearchField />
            <div className="flex flex-row gap-5">
                <Icon iconName="notifications" className="text-todo-green" />
                <Icon iconName="person" className="text-todo-green" />
            </div>
        </header>
    );
};

export default Header;