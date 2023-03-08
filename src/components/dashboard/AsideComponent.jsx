// import React, { useState } from 'react'
// import { useAuth } from "../../context/auth";
// import { GiPublicSpeaker } from 'react-icons/gi'
// import {
//     BiCameraMovie,
//     BiSearch,
// } from 'react-icons/bi'
// import {
//     IoCalendarNumberOutline,
//     IoHomeOutline,
//     IoSettingsOutline,
//     IoLogOutOutline,
//     IoAirplaneOutline
// } from 'react-icons/io5'

// const AsideComponent = ({ handleViewChange }) => {
//     const AsideClasses = ['bg-gray-800 w-[320px] h-full flex flex-col box-shadow-lg']
//     const ulClasses = ['flex flex-col w-full h-16 cursor-pointer text-left']
//     const ListClasses = ['flex flex-row items-center w-full h-full p-5 hover:bg-green-600 text-white text-xl', 'transition duration-500 ease-in-out hover:bg-gray-400 gap-2']
//     const logoutListClasses = ['flex flex-row items-center w-full h-full p-5 hover:bg-red-600 rounded-md text-white text-xl']
//     const [active, setActive] = useState('Home')
//     const [showAside, setShowAside] = useState(false);
//     const { logout } = useAuth()
    
//     const handleChangeView = (v) => {
//         setActive(v)
//         handleViewChange(v)
//     }

//     const handleToggleAside = () => {
//         setShowAside(!showAside)
//         console.log(showAside)
//     }
    
//     return (
//         <div className={AsideClasses}>
//             <div className='flex flex-col items-center'>
//                 <div className='bg-gray-800 max-w-[320px] my-auto flex flex-col justify-center items-center'>
//                     <p className='text-orange-400 text-3xl font-bold uppercase'>Events Engine</p>
//                     <p className='text-green-500 text-xl capitalize'>Talent Network</p>
//                 </div>
//                 <div className='bg-gray-800 w-[320px] h-16 flex flex-row justify-center items-center'>
//                     <input type='text' placeholder='Buscar' className='w-3/4 h-10 pl-2 rounded-bl-md rounded-tl-md' />
//                     <BiSearch className='text-white bg-green-500 w-10 h-10 p-2 rounded-tr-md rounded-br-md' />
//                 </div>
//             </div>
//             <div className='my-auto'>
//                 <div>
//                     <ul className={ulClasses}>
//                         <li className={active === 'Home' ? ListClasses.join(' ') + ' bg-green-500' : ListClasses.join(' ')} onClick={() => handleChangeView('Home')}>
//                             <IoHomeOutline className='text-2xl' />
//                             <span>Inicio</span>
//                         </li>
//                         <li className={active === 'Contenidos' ? ListClasses.join(' ') + ' bg-green-500' : ListClasses.join(' ')} onClick={() => handleChangeView('Contenidos')}>
//                             <BiCameraMovie className='text-2xl' />
//                             <span>Contenidos</span>
//                         </li>
//                         <li className={active === 'Speakers' ? ListClasses.join(' ') + ' bg-green-500' : ListClasses.join(' ')} onClick={() => handleChangeView('Speakers')}>
//                             <GiPublicSpeaker className='text-2xl' />
//                             <span>Ponentes</span>
//                         </li>
//                         <li className={active === 'Travel' ? ListClasses.join(' ') + ' bg-green-500' : ListClasses.join(' ')} onClick={() => handleChangeView('Travel')}>
//                             <IoAirplaneOutline className='text-2xl' />
//                             <span>Viajes</span>
//                         </li>
//                         <li className={active === 'Calendar' ? ListClasses.join(' ') + ' bg-green-500' : ListClasses.join(' ')} onClick={() => handleChangeView('Calendar')}>
//                             <IoCalendarNumberOutline className='text-2xl' />
//                             <span>Calendario</span>
//                         </li>
//                         <li className={active === 'Config' ? ListClasses.join(' ') + ' bg-green-500' : ListClasses.join(' ')} onClick={() => handleChangeView('Config')}>
//                             <IoSettingsOutline className='text-2xl' />
//                             <span>Administración</span>
//                         </li>
//                         <li className={logoutListClasses} onClick={() => logout()}>
//                             <IoLogOutOutline className='text-2xl' />
//                             <span>Salir</span>
//                         </li>
//                     </ul>
//                 </div>
//                 <button onClick={handleToggleAside} className='bg-gray-800 w-16 h-16 flex flex-row justify-center items-center'>Hide</button>
//             </div>
//         </div>
//     )
// }

// export default AsideComponent

import React, { useState } from 'react'
import NormalAside from './Aside/NormalAside'

const AsideComponent = ({ handleViewChange }) => {

    // si el usuario presiona el boton de ocultar el aside, se oculta el aside y se muestra el boton de mostrar el aside
    // si el usuario presiona el boton de mostrar el aside, se muestra el aside y se oculta el boton de mostrar el aside
    // para lograr esto, se debe crear un estado que almacene el valor de la propiedad display del aside
    // si el estado es none, se muestra el boton de mostrar el aside

    const [showAside, setShowAside] = useState('block')


    const handleToggleAside = () => {
        if (showAside === 'block') {
            setShowAside('none')
        } else {
            setShowAside('block')
        }
    }

    return (
        <div>
            <NormalAside showAside={showAside} handleViewChange={handleViewChange} handleToggleAside={handleToggleAside} />
            <button onClick={handleToggleAside} className='bg-gray-800 w-16 h-16 flex flex-row justify-center items-center'>Hide</button>
        </div>
    )
}

export default AsideComponent
