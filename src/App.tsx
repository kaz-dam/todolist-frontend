import React from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import "./App.css";
import AppRoutes from "./AppRoutes";
import useSiteTitle from "./hooks/use-site-title/use-site-title";

const App = () => {
    const siteTitle = useSiteTitle();

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
