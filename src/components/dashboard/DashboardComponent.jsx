import React, { useState } from 'react'
import AsideComponent from './AsideComponent'
import ContentComponent from './ContentComponent'
import ContentHome from './ContentHome'

const DashboardComponent = () => {
    const [currentView, setCurrentView] = useState('Home')
    const handleViewChange = (view) => {
        setCurrentView(view)
    }

    return (
        <div id='dashboard' className='flex flex-row h-screen w-screen'>
            <AsideComponent handleViewChange={handleViewChange} />
            <ContentHome handleViewChange={handleViewChange} />
            <ContentComponent currentView={currentView} />
        </div>
    )
}

export default DashboardComponent
