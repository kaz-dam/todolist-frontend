import React from "react";
import { useDialog } from "../../../contexts/dialog-context";

type DialogProps = React.HTMLProps<HTMLDivElement> & {
    // open: boolean;
    // onClose: () => void;
};

const Dialog = ({ children, ...props }: DialogProps) => {
    const { open, closeDialog } = useDialog();

    return (
        <>
            <div className={`${open ? 'block' : 'hidden'} fixed top-0 left-0 w-screen h-screen z-10 bg-black bg-opacity-60`} onClick={closeDialog}></div>
            <div className={`${open ? 'block' : 'hidden'} fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-todo py-10 px-8`}>
                {children}
            </div>
        </>
    );
};

export default Dialog;