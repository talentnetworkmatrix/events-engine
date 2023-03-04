import React, { useState } from 'react'

const ContentHome = ({ handleViewChange }) => {
  const [section, setSection] = useState(null)

  const eachSection = [
    {
      icon: 'BiCameraMovie',
      title: 'Contenidos',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      list: ['Lista de Ponentes', 'Crear nueva área', 'Invitar nuevo ponente'],
      view: 'Contenidos' // agregar una propiedad view para indicar la vista correspondiente
    },
    {
      icon: 'GiPublicSpeaker',
      title: 'Speakers',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      list:['lista de ponentes'],
      view: 'Speakers' // agregar una propiedad view para indicar la vista correspondiente
    },
    {
      icon: 'IoAirplaneOutline',
      title: 'Viajes',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      list:['lista de viajes', 'crear nueva cotización'],
      view: 'Travel' // agregar una propiedad view para indicar la vista correspondiente
    },
    {
      icon: '',
      title: 'administración',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      list:['editar información', 'administrar equipo', 'administrar solicitudes'],
      view: 'Config' // agregar una propiedad view para indicar la vista correspondiente
    }
  ]

  const handleSection = (section) => {
    setSection(section)
    handleViewChange(section.view) // actualizar la vista en función de la propiedad view
  }

  return (
    <div className='bg-gray-200 h-full w-full flex p-5 rounded-md shadow-md justify-center items-center'>
      {eachSection.map((section, index) => (
        <div className='flex flex-row w-full justify-evenly' key={index}>
          <div>
            <div className='bg-white gap-2 flex flex-col shadow-md p-5 rounded-md min-w-[280px] min-h-[280px]'>
              <h2 className='text-2xl font-bold uppercase text-center'>{section.title}</h2>
              {section.list.map((item, index) => (
                <p 
                  className='hover:bg-green-500 active:bg-green-600 active:text-white active:transition active:ease-in-out active:rounded-full transition ease-in-out p-2 rounded-sm shadow-sm cursor-pointer'
                  onClick={() => handleSection(section)} key={index}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ContentHome
