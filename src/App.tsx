import React, { useMemo } from "react";
import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Dashboard from "./components/pages/dashboard";
import Statistics from "./components/pages/statistics";
import Calendar from "./components/pages/calendar";
import Tasks from "./components/pages/tasks/tasks";
import NotFound from "./components/pages/not-found";
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
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="statistics" element={<Statistics />} />
                        <Route path="calendar" element={<Calendar />} />
                        <Route path="tasks" element={<Tasks />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
