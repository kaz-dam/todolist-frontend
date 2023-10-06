import React from "react";
import "./App.css";
import Layout from "./components/layout/layout";
import AppRoutes from "./AppRoutes";
import useSiteTitle from "./hooks/use-site-title/use-site-title";
import { TaskServiceProvider } from "./contexts";

const App = () => {
    const siteTitle = useSiteTitle();

    return (
        <TaskServiceProvider>
            <Layout siteTitle={siteTitle}>
                <AppRoutes />
            </Layout>
        </TaskServiceProvider>
    );
};

export default App;
