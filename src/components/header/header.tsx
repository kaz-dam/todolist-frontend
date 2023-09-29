import React from "react";
import SearchField from "../ui/search-field/search-field";
import Icon from "../ui/icon/icon";

type HeaderProps = React.HTMLProps<HTMLElement> & {
    siteTitle: string;
};

const Header = ({ siteTitle, ...props }: HeaderProps) => {
    return (
        <header className="flex md:flex-row flex-col-reverse justify-between gap-4 sticky top-0 pt-2 pb-4 md:px-12 px-4" {...props}>
            <h1 className="font-semibold md:text-4xl text-2xl md:text-left text-center text-todo-green">{siteTitle}</h1>
            <div className="flex flex-row justify-between items-center md:w-2/4">
                <SearchField />
                <div className="flex flex-row gap-5">
                    <Icon iconName="notifications" className="text-todo-green" />
                    <Icon iconName="person" className="text-todo-green" />
                </div>
            </div>
        </header>
    );
};

export default Header;