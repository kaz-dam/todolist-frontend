import React from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
    return (
        <div className="flex flex-row w-screen h-screen bg-todo-green">
            <Sidebar />
            <div className="w-full bg-todo-light-grey rounded-tl-todo rounded-bl-todo py-10 px-12">
                <Header />
                {/* ROUTER GOES HERE */}
                <Footer />
            </div>
        </div>
    );
};

export default App;
