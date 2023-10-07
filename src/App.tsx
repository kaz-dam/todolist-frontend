import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import Layout from "./components/layout/layout";
import AppRoutes from "./AppRoutes";
import useSiteTitle from "./hooks/use-site-title/use-site-title";
import { TaskServiceProvider } from "./contexts";

const queryClient = new QueryClient();

const App = () => {
    const siteTitle = useSiteTitle();

    return (
        <QueryClientProvider client={queryClient}>
            <TaskServiceProvider>
                <Layout siteTitle={siteTitle}>
                    <AppRoutes />
                </Layout>
            </TaskServiceProvider>
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
};

export default App;
