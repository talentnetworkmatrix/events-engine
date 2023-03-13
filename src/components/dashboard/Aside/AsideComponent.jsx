import React, { useState } from 'react';
import NormalAside from './NormalAside';
import SmallAside from './SmallAsideComponent';

const AsideComponent = ({ handleViewChange }) => {

    const [active, setActive] = useState('Home');
    const [isHovered, setIsHovered] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);

    const handleChangeView = (view) => {
        setActive(view);
        handleViewChange(view);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <div
            className={`flex ${
                isMaximized ? 'w-full' : 'w-auto'
            } items-center relative`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered || isMaximized 
                ?
                    <NormalAside
                        active={active}
                        handleChangeView={handleChangeView}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                        isMaximized={isMaximized}
                        setIsMaximized={setIsMaximized}
                    />
                :
                    <SmallAside
                        active={active}
                        handleChangeView={handleChangeView}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                        isMaximized={isMaximized}
                        setIsMaximized={setIsMaximized}
                    />
            }
        </div>
    );
};

export default AsideComponent;
