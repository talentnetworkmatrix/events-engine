import React from 'react';
import ContentHome from './ContentHome';
import ContentCalendar from './ContentCalendar';
import ContentConfig from './ContentConfig';
import ContentTravel from './ContentTravel';
import ContentSpeaker from './ContentSpeaker';
import ContenidosContent from './ContenidosContent';

const ContentComponent = ({ currentView, setCurrentView }) => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center dark:bg-gray-800'>
            {currentView === 'Home' && (
                <ContentHome setCurrentView={setCurrentView} />
            )}
            {currentView === 'Calendar' && <ContentCalendar />}
            {currentView === 'Config' && <ContentConfig />}
            {currentView === 'Travel' && <ContentTravel />}
            {currentView === 'Speakers' && <ContentSpeaker />}
            {currentView === 'Contenidos' && <ContenidosContent />}
        </div>
    );
};

export default ContentComponent;
