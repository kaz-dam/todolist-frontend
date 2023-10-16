import React from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import Footer from "../footer";
import Dialog from "../ui/dialog/dialog";
import CreateTaskForm from "../create-task-form/create-task-form";

type LayoutProps = {
    siteTitle: string;
    children: React.ReactNode;
};

const Layout = ({siteTitle, children, ...props }: LayoutProps) => {
    return (
        <div className="flex md:flex-row flex-col w-screen h-screen bg-todo-green text-todo-text">
            <Sidebar />
            <div className="w-full md:h-screen flex flex-col flex-grow bg-todo-light-grey rounded-tl-todo md:rounded-bl-todo rounded-bl-none md:rounded-tr-none rounded-tr-todo py-5 md:px-12 px-4 relative">
                <Header siteTitle={siteTitle} />
                <div className="grow">
                    {children}
                </div>
                <Dialog>
                    <CreateTaskForm />
                </Dialog>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;