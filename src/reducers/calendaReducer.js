
import { types } from "../types/types";

/* {
  id: new Date().getTime(),
  title: "Cumpleaños Belen",
  start: moment().toDate(),
  end: moment().add(2, "hours").toDate(),
  
  notes: "Comprar pastel",
  user: {
    _id: "123456",
    name: "Hernan",
  },
}, */


const initialState = {
    events: [],
    activeEvent: null
};

export const calendaReducer = (state = initialState, action) => {
    switch (action.type) {
       case types.eventSetActive:
           return {
                ...state,
                activeEvent: action.payload
           }
       case types.eventAddNew:
           return {
                ...state,
                events: [...state.events, action.payload]
           }
          case types.eventClearActiveEvent:
              return {
                ...state,
                activeEvent: null
              }
          case types.eventUpdated:
              return {
                ...state,
                events: state.events.map(event =>
                  event.id === action.payload.id ? action.payload : event
                ) 
              }
          case types.eventDeleted:
              return {
                ...state,
                events: state.events.filter(
                  e => (e.id !== state.activeEvent.id )
                ),
                activeEvent: null 
              }
          case types.eventLoaded:
            return{
              ...state, 
              events: [...action.payload]
            }
        
        default:
        return state;
    }
};