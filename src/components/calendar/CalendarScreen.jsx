import React from 'react';
import Navbar from '../ui/Navbar';
/* import 'react-big-calendar/lib/css/react-big-calendar.css' */
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';


const localizer = momentLocalizer(moment); 

const events = [{
    title: 'Cumpleaños Belen',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#f56954',
}];    

const CalendarScreen = () => {
    return (
        <div className="calendar__main">
            <Navbar />
            
            
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
               
            />
        </div>
    )
}

export default CalendarScreen
