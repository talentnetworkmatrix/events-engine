import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const CanlendarSettingsComponent = () => {
  return (
    <div>
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            weekends={false}
            events={[
              { title: 'Evento 1', date: '2022-03-15' },
              { title: 'Evento 2', date: '2022-03-20' }
            ]}
        />
    </div>
  )
}

export default CanlendarSettingsComponent