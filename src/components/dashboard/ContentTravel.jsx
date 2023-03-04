import React from 'react'

const ContentTravel = () => {
    const travelButtonClasses = 'bg-blue-900 text-white rounded-md shadow-md p-5 max-w-sm'
    return (
        <div className='bg-gray-200 w-full h-full flex flex-col text-4xl'>
            <div className='flex flex-col gap-2 w-[320px]'>
                <button className={ travelButtonClasses }>Crear vuelo</button>
                <button className={ travelButtonClasses }>Buscar vuelo</button>
                <button className={ travelButtonClasses }>Editar vuelo</button>
                <button className={ travelButtonClasses }>Ver vuelos</button>
            </div>
        </div>
    )
}

export default ContentTravel