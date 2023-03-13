import React, { useState } from 'react'
import AsideComponent from './Aside/AsideComponent'
import ContentComponent from './ContentComponent'
import ContentHomeComponent from './ContentHomeComponent'

const DashboardComponent = () => {

    const [currentView, setCurrentView] = useState('Home')
    const handleViewChange = (view) => {
        setCurrentView(view)
    }

    return (
        <div id='dashboard' className='flex flex-row h-screen w-screen'>
            <AsideComponent handleViewChange={handleViewChange} />
            <div className='flex flex-col w-full'>
                {currentView === 'Home' ? (
                    <ContentHomeComponent handleViewChange={handleViewChange} />
                ) : (
                    <ContentComponent currentView={currentView} handleViewChange={handleViewChange} />
                )}
            </div>
        </div>
    )
}

export default DashboardComponent