import React from 'react';
import Navbar from '../ui/Navbar';
/* import 'react-big-calendar/lib/css/react-big-calendar.css' */
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import { messages } from '../../helpers/calendar-es';



moment.locale('es');

const localizer = momentLocalizer(moment); 

const events = [{
    title: 'Cumpleaños Belen',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#f56954',
}];    

const CalendarScreen = () => {
    
    const eventStyleGetter = (event, start, end, isSelected ) => {
        const style = {
            backgroundColor: '#367cf7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white',
        }

       
        return {
            style
        }
    };
    
    return (
        <div className="calendar__main">
            <Navbar />
            
            
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
               
            />
        </div>
    )
}

export default CalendarScreen
