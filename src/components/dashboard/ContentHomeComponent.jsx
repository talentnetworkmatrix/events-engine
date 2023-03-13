import React, { useState } from 'react'
import { useAuth } from "../../context/auth";
import { GiPublicSpeaker } from 'react-icons/gi'
import {
    BiCameraMovie,
    BiSearch,
} from 'react-icons/bi'
import {
    IoCalendarNumberOutline,
    IoHomeOutline,
    IoSettingsOutline,
    IoLogOutOutline,
    IoAirplaneOutline
} from 'react-icons/io5'


const ContentHomeComponent = ({ handleViewChange, setActive }) => {
  const { logout } = useAuth()
  const [section, setSection] = useState(null)
  section && console.log(section)

  const eachSection = [
    {
      icon: 'BiCameraMovie',
      title: 'Contenidos',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      list: ['Lista de Ponentes', 'Crear nueva área', 'Invitar nuevo ponente'],
      view: 'Contenidos'
    },
    {
      icon: 'GiPublicSpeaker',
      title: 'Speakers',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      list:['lista de ponentes'],
      view: 'Speakers'
    },
    {
      icon: 'IoAirplaneOutline',
      title: 'Travel',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      list:['lista de viajes', 'crear nueva cotización'],
      view: 'Travel'
    },
    {
      icon: 'IoSettingsOutline',
      title: 'administración',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      list:['editar información', 'administrar equipo', 'administrar solicitudes'],
      view: 'Config'
    },
    {
      icon: 'IoCalendarNumberOutline',
      title: 'Calendario',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      list:['lista de eventos', 'crear nuevo evento'],
      view: 'Calendar'
    },
    {
      icon: '',
      title: 'Notificaciones',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      list:['lista de notificaciones', 'crear nueva notificación'],
      view: 'Notifications'
    },
    {
      icon: '',
      title: 'Usuarios',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      list:['lista de usuarios', 'crear nuevo usuario'],
      view: 'Users'
    },
    {
      icon: '',
      title: 'Reportes',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      list:['lista de reportes', 'crear nuevo reporte'],
      view: 'Reports'
    },
    {
      icon: '',
      title: 'Configuración',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      list:['lista de configuraciones', 'crear nueva configuración'],
      view: 'Config'
    },
    {
      icon: '',
      title: 'Ayuda',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      list:['lista de ayuda', 'crear nueva ayuda'],
      view: 'Help'
    },
    {
      icon: 'IoLogOutOutline',
      title: 'Salir',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      list:['cerrar sesión'],
      view: 'Logout'
    }
  ]

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'BiCameraMovie':
        return <BiCameraMovie />
      case 'GiPublicSpeaker':
        return <GiPublicSpeaker />
      case 'IoAirplaneOutline':
        return <IoAirplaneOutline />
      default:
        return <span>Icono no especificado</span>
    }
  }
  

  const handleSection = (section) => {
    setSection(section)
    handleViewChange(section.view)
    setActive(section.title)
  }

  return (
    <div className='bg-gray-200 h-full w-full flex flex-wrap p-5 rounded-md shadow-md gap-5 justify-around'>
      {eachSection.map((section, index) => (
        <section key={index}>
            <div className='bg-white gap-2 flex flex-col shadow-md p-5 rounded-md min-w-[280px] min-h-[280px]'>
              <span>{getIcon(section.icon)}</span>
              <h2 className='text-2xl font-bold uppercase text-center'>{section.title}</h2>
              {section.list.map((item, index) => (
                <p
                  className='hover:bg-green-500 active:bg-green-600 active:text-white active:transition active:ease-in-out active:rounded-full transition ease-in-out p-2 rounded-sm shadow-sm cursor-pointer'
                  onClick={() => handleSection(section)} key={index}>
                  {item}
                </p>
              ))}
            </div>
        </section>
      ))}
    </div>
  )
}

export default ContentHomeComponent
