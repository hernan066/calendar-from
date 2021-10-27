import React, { useState } from "react";
import Navbar from "../ui/Navbar";
/* import 'react-big-calendar/lib/css/react-big-calendar.css' */
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import { messages } from "../../helpers/calendar-es";
import CalendarEvent from "./CalendarEvent";
import CalendarModal from "./CalendarModal";

moment.locale("es");

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Cumpleaños Belen",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgcolor: "#f56954",
    notes: "Comprar pastel",
    user: {
      _id: "123456",
      name: "Hernan",
    },
  },
];

const CalendarScreen = () => {
  
  
    const [lastView, setLastView] = useState(localStorage.getItem("lastView") || "month");
 
    const onDoubleClick = (e) => {
      console.log(e);
    };
  const onSelectEvent = (e) => {
      console.log(e);
    };
  
  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
    };
  
    const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#367cf7",
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
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />

      <CalendarModal />
    </div>
  );
};

export default CalendarScreen;
