import React, { useCallback } from "react";
import FloatingButton from "../../ui/floating-button/floating-button";

const Tasks = () => {
    
    const handleFloatingButtonClick = useCallback(() => {
        console.log('Floating button clicked');
    }, []);

    return (
        <>
            <div className="flex flex-col gap-6 items-center bg-white rounded-todo">
                <FloatingButton onClick={handleFloatingButtonClick} />
            </div>
        </>
    );
};

export default Tasks;