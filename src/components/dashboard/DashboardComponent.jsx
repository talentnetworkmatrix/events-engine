// import React, { useState } from 'react'
// import AsideComponent from './AsideComponent'
// import ContentComponent from './ContentComponent'
// import ContentHome from './ContentHome'

// const DashboardComponent = () => {

//     const [currentView, setCurrentView] = useState('Home')
//     const handleViewChange = (view) => {
//         setCurrentView(view)
//     }

//     return (
//         <div id='dashboard' className='flex flex-row h-screen w-screen'>
//             <AsideComponent handleViewChange={handleViewChange} />
//             <div className='flex flex-col w-full'>
//                 {/* if is clicked on Home should show ContentHome without the ContentComponent, if is clicked on Contenidos should show ContentComponent without ContentHome */}
                

//                 <ContentHome handleViewChange={handleViewChange} />
//                 <ContentComponent currentView={currentView} />
//             </div>
//         </div>
//     )
// }

// export default DashboardComponent

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
            <div className='flex flex-col w-full'>
                {currentView === 'Home' ? (
                    <ContentHome handleViewChange={handleViewChange} />
                ) : (
                    <ContentComponent currentView={currentView} />
                )}
            </div>
        </div>
    )
}

export default DashboardComponent
