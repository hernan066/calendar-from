import React, { useEffect, useState } from "react";
import Navbar from "../ui/Navbar";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import { messages } from "../../helpers/calendar-es";
import CalendarEvent from "./CalendarEvent";
import CalendarModal from "./CalendarModal";
import { useDispatch, useSelector } from "react-redux";
import { uiOpenModal } from "../../actions/ui";
import { eventSetActive, eventStartLoading } from "../../actions/events";
import { AddNewFab } from "../ui/AddNewFa";

moment.locale("es");

const localizer = momentLocalizer(moment);



const CalendarScreen = () => {
  
    
    const dispatch = useDispatch()

    const {events} = useSelector(state => state.calendar)
    const {uid} = useSelector(state => state.auth)
    
    const [lastView, setLastView] = useState(localStorage.getItem("lastView") || "month");
 
    
    //bug no anda en chrome, pero si en firefox, asi que se usa el onSelectEvent
    /* const onDoubleClick = (e) => {
      console.log(e);
      console.log('doble clic')
      dispatch(uiOpenModal());
    }; */

    useEffect(() => {
      dispatch(eventStartLoading());
    }, [dispatch])
  
    const onSelectEvent = (e) => {
       console.log(e);  
      dispatch(uiOpenModal());
      dispatch(eventSetActive(e));
      dispatch( uiOpenModal() );
    };
  
  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
    };
  
    const eventStyleGetter = (event, start, end, isSelected) => {
    
    
      const style = {
      backgroundColor: (uid === event.user._id)  ? "#367cf7" : '#464660',
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };

  return (
    <div className="calendar__main">
      <Navbar />

      <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor="end"
                messages={ messages }
                eventPropGetter={ eventStyleGetter }
               /*  onDoubleClickEvent={ onDoubleClick } */
                
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                /* onSelectSlot={ onSelectSlot } */
                selectable={ true }
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />

      <CalendarModal />
      <AddNewFab />
    </div>
  );
};

export default CalendarScreen;
