import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import "./App.css";
import AppRoutes from "./AppRoutes";

type TitleNames = {
    [key: string]: string;
};

const App = () => {
    const location = useLocation();

    const pathToTitleMapping = useMemo((): TitleNames => {
        return {
            '/': 'Dashboard',
            '/statistics': 'Statistics',
            '/calendar': 'Calendar',
            '/tasks': 'Tasks'
        };
    }, []);

    const siteTitle = useMemo((): string => {
        return pathToTitleMapping[location.pathname] || 'Ooops!';
    }, [location.pathname, pathToTitleMapping]);

    return (
        <div className="flex md:flex-row flex-col w-screen h-screen bg-todo-green text-todo-text">
            <Sidebar />
            <div className="w-full md:h-screen flex flex-col flex-grow bg-todo-light-grey rounded-tl-todo md:rounded-bl-todo rounded-bl-none md:rounded-tr-none rounded-tr-todo py-5 md:px-12 px-4 relative">
                <Header siteTitle={siteTitle} />
                <div className="grow">
                    <AppRoutes />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
