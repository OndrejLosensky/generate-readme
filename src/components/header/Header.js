import React from "react";

const Header = () => {
    return (
        <div className="w-full">
            <h1 className="py-4 uppercase text-5xl font-bold text-center text-whiteText pt-8" style={{ position: 'fixed', top: 0, left: 0, width: '100%', background: '#333' }}>
                Readme generator
            </h1>
        </div>
    );
};

export default Header;
