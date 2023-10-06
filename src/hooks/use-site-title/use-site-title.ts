import { useMemo } from "react";
import { useLocation } from "react-router-dom";

type TitleNames = {
    [key: string]: string;
};

const useSiteTitle = () => {
    const location = useLocation();

    const pathToTitleMapping: TitleNames = useMemo(() => ({
        '/': 'Dashboard',
        '/statistics': 'Statistics',
        '/calendar': 'Calendar',
        '/tasks': 'Tasks'
    }), []);

    return useMemo(() => pathToTitleMapping[location.pathname] || 'Ooops!', [location.pathname, pathToTitleMapping]);
};

export default useSiteTitle;