import React from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
    return (
        <div className="flex md:flex-row flex-col w-screen h-screen bg-todo-green text-todo-text">
            <Sidebar />
            <div className="w-full md:h-screen flex flex-col flex-grow bg-todo-light-grey rounded-tl-todo md:rounded-bl-todo rounded-bl-none md:rounded-tr-none rounded-tr-todo py-5 px-12 relative">
                <Header siteTitle="Dashboard" />
                {/* ROUTER GOES HERE */}
                <div className="grow">content</div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
