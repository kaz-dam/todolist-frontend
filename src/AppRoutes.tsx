import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import Statistics from "./components/pages/statistics";
import Calendar from "./components/pages/calendar";
import Tasks from "./components/pages/tasks/tasks";
import NotFound from "./components/pages/not-found";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default AppRoutes;