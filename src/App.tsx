import React, { useMemo } from "react";
import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import "./App.css";

type TitleNames = {
    [key: string]: string;
};

const App = () => {
    const location = useLocation();

    const pathToTitleMapping = useMemo((): TitleNames => {
        return {
            '/': 'Dashboard',
            '/statistics': 'Statistics',
            '/calendar': 'Calendar'
        };
    }, []);

    const siteTitle = useMemo((): string => {
        return pathToTitleMapping[location.pathname];
    }, [location.pathname, pathToTitleMapping]);

    return (
        <div className="flex md:flex-row flex-col w-screen h-screen bg-todo-green text-todo-text">
            <Sidebar />
            <div className="w-full md:h-screen flex flex-col flex-grow bg-todo-light-grey rounded-tl-todo md:rounded-bl-todo rounded-bl-none md:rounded-tr-none rounded-tr-todo py-5 md:px-12 px-4 relative">
                <Header siteTitle={siteTitle} />
                <div className="grow">
                    <Routes>
                        <Route path="/" element={<h1>This is the dashboard</h1>} />
                        <Route path="statistics" element={<h1>This is the statistics</h1>} />
                        <Route path="calendar" element={<h1>This is the calendar</h1>} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
