import moment from "moment";
import { types } from "../types/types";


const initialState = {
    events: [{
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

    ],
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
        
        default:
        return state;
    }
};