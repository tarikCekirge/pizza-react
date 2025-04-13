import React from 'react'

const BannerTwo = ({ leftArea, rightArea, ...props }) => {
    return (
        <div {...props} className="bg-gray-950 flex items-center  rounded-xl overflow-hidden  px-6 py-2 bg-center bg-cover bg-no-repeat">
            <div className="flex-3">
                {leftArea}
            </div>
            <div className="flex-2">
                {rightArea}
            </div>
        </div>
    );
};

export default BannerTwo;
