import React, { useState } from 'react';
import SpeakersListComponent from './SpeakersListComponent';
import CreateAreaComponent from './CreateAreaComponent';
import CalendarComponent from './CalendarComponent';
import ConfigurationComponent from './ConfigurationComponent';
import HomeContenidosComponent from './HomeContenidosComponent';

const ContenidosContentComponent = ({handleViewChange}) => {
  const travelButtonClasses = 'rounded-md shadow-md py-2';
  const [selectedComponent, setSelectedComponent] = useState('Home');

  const handleButtonClick = (component) => {
    switch (component) {
      case 'Home':
        setSelectedComponent(<HomeContenidosComponent />);
        break;
      case 'SpeakersList':
        setSelectedComponent(<SpeakersListComponent />);
        break;
      case 'CreateArea':
        setSelectedComponent(<CreateAreaComponent />);
        break;
      case 'Calendar':
        setSelectedComponent(<CalendarComponent />);
        break;
      case 'Configuration':
        setSelectedComponent(<ConfigurationComponent />);
        break;
      default:
        setSelectedComponent(null);
        break;
    }
  };

  return (
        <div className='bg-gray-200 w-full h-full flex flex-row text-2xl'>
            <div className='flex flex-col gap-2 w-[320px] my-auto'>
                <button className={ travelButtonClasses } onClick={() => { handleButtonClick('SpeakersList')}}>Lista de Speakers</button>
                <button className={ travelButtonClasses } onClick={() => { handleButtonClick('CreateArea')}}>Crear Area</button>
                <button className={ travelButtonClasses } onClick={() => { handleButtonClick('Calendar')}}>Calendario</button>
                <button className={ travelButtonClasses } onClick={() => { handleButtonClick('Configuration')}}>Configuración</button>
            </div>
            <div className='flex flex-col justify-center items-center w-full'>
                  {selectedComponent ? selectedComponent : <p>Selecciona una opción</p>}
            </div>
        </div>
  );
};

export default ContenidosContentComponent;
