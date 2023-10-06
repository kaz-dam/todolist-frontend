import React from "react";
import "./App.css";
import Layout from "./components/layout/layout";
import AppRoutes from "./AppRoutes";
import useSiteTitle from "./hooks/use-site-title/use-site-title";

const App = () => {
    const siteTitle = useSiteTitle();

    return (
        <Layout siteTitle={siteTitle}>
            <AppRoutes />
        </Layout>
    );
};

export default App;
