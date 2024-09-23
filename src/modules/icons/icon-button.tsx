import React from "react";

function IconButton({ children, ...restProps }) {
    return (
        <div
            className="flex justify-center items-center rounded-full bg-icon-bg size-8 lg:size-11"
            {...restProps}
        >
            {children}
        </div>
    );
}

export default IconButton;
