import React from 'react';
import ContentHomeComponent from './ContentHomeComponent';
import ContentCalendar from './ContentCalendar';
import ContentConfigComponent from './ContentConfigComponent';
import ContentTravelComponent from './ContentTravelComponent';
import ContentSpeakerComponent from './ContentSpeakerComponent';
import ContenidosContentComponent from './Contenidos/ContenidosContentComponent';
import SpeakersListComponent from './Contenidos/SpeakersListComponent';

const ContentComponent = ({
        currentView,
        setCurrentView,
        setActive,
        handleViewChange
    }) => {

    return (
        <div className='w-full h-full flex flex-col justify-center items-center dark:bg-gray-800'>
            {currentView === 'Home' && (
                <ContentHomeComponent setCurrentView={setCurrentView} setActive={setActive} />
            )}
            {currentView === 'Calendar' && <ContentCalendar />}
            {currentView === 'Config' && <ContentConfigComponent />}
            {currentView === 'Travel' && <ContentTravelComponent />}
            {currentView === 'Speakers' && <ContentSpeakerComponent />}
            {currentView === 'Contenidos' && <ContenidosContentComponent handleViewChange={handleViewChange} />}
            {currentView === 'SpeakersList' && <SpeakersListComponent handleViewChange={handleViewChange} />}
        </div>
    );
};

export default ContentComponent;
