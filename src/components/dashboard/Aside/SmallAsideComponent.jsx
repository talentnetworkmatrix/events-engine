import React from 'react'
import { useAuth } from "../../../context/auth";
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

const SmallAsideComponent = ({ active, handleChangeView }) => {
    const AsideClasses = ['bg-gray-800 max-w-[320px] h-full flex flex-col box-shadow-lg']
    const ulClasses = ['flex flex-col w-full h-16 cursor-pointer text-left']
    const ListClasses = ['flex mx-auto items-center w-16 h-16 p-5 hover:bg-green-600 text-white text-xl rounded-full']
    const logoutListClasses = ListClasses + ' hover:bg-blue-500'

    const { logout } = useAuth()

    return (
        <div className={AsideClasses}>
            <div className='flex flex-col items-center'>
                <div className='bg-gray-800 max-w-[80px] my-auto flex flex-col justify-center items-center'>
                    <p className='text-green-500 text-lg text-center capitalize'>Talent Network</p>
                </div>
                <div className='bg-gray-800 w-[80px] h-16 flex flex-row justify-center items-center'>
                    <BiSearch className='text-white bg-green-500 w-10 h-10 p-2 rounded-full' />
                </div>
            </div>
            <div className='my-auto'>
                <div>
                    <ul className={ulClasses}>
                        <li className={
                                active === 'Home'
                                ? ListClasses
                                + ' bg-green-500'
                                : ListClasses
                            }
                            onClick={() => handleChangeView('Home')}
                        >
                            <IoHomeOutline className='text-2xl' />
                        </li>
                        <li className={active === 'Contenidos' ? ListClasses.join(' ') + ' bg-green-500' : ListClasses.join(' ')} onClick={() => handleChangeView('Contenidos')}>
                            <BiCameraMovie className='text-2xl' />
                        </li>
                        <li className={active === 'Speakers' ? ListClasses.join(' ') + ' bg-green-500' : ListClasses.join(' ')} onClick={() => handleChangeView('Speakers')}>
                            <GiPublicSpeaker className='text-2xl' />
                        </li>
                        <li className={active === 'Travel' ? ListClasses.join(' ') + ' bg-green-500' : ListClasses.join(' ')} onClick={() => handleChangeView('Travel')}>
                            <IoAirplaneOutline className='text-2xl' />
                        </li>
                        <li className={active === 'Calendar' ? ListClasses.join(' ') + ' bg-green-500' : ListClasses.join(' ')} onClick={() => handleChangeView('Calendar')}>
                            <IoCalendarNumberOutline className='text-2xl' />
                        </li>
                        <li className={active === 'Config' ? ListClasses.join(' ') + ' bg-green-500' : ListClasses.join(' ')} onClick={() => handleChangeView('Config')}>
                            <IoSettingsOutline className='text-2xl' />
                        </li>
                        <li className={logoutListClasses} onClick={() => logout()}>
                            <IoLogOutOutline className='text-2xl' />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
)}

export default SmallAsideComponent
