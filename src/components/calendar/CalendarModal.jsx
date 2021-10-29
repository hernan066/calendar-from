import React, { useState } from "react";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";

import moment from "moment";
import Swal from 'sweetalert2'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    /* marginRight: "-50%",
    transform: "translate(-50%, -50%)", */
  },
};

Modal.setAppElement("#root");

const now = moment().minutes(0).seconds(0).add(1, "hours");
const nowPlus1 = now.clone().add(1, "hours");

const CalendarModal = () => {
  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());
  const [titleValid, setTitleValid] = useState(true);

  const [formValues, setFormValues] = useState({
    title: "Evento",
    notes: "",
    start: now.toDate(),
    end: nowPlus1.toDate(),
  });

  const { title, notes, start, end } = formValues;

  const closeModal = () => {};

  const handleStartDateChange = (date) => {
    setDateStart(date);
    setFormValues({
      ...formValues,
      start: date
    })
  };
  const handleEndDateChange = (date) => {
    setDateEnd(date);
    setFormValues({
      ...formValues,
      end: date
    })
  };

  const handleInputChange =({target})=>{
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  };
  const handleSubmitForm = (e)=>{
    e.preventDefault();
    
    const momentStart = moment(start);
    const momentEnd = moment(end);

    if(momentStart.isSameOrAfter(momentEnd)){
      Swal.fire('Error', 'La fecha de fin del evento debe ser posterior a la fecha de inicio', 'error')
      return;
    };

    if(title.trim().length === 0){
      setTitleValid(false);
      return;
    };

    setTitleValid(true);
    closeModal();
  };

  return (
    <Modal
      isOpen={true}
      //onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
      contentLabel="Example Modal"
    >
      <h3 className="modal__title"> Nuevo evento </h3>
      <label className="modal__input-label">Inicio evento</label>
      <form 
        className="modal__form"
        onSubmit={handleSubmitForm}
      >
        <div className="modal__form-group">
          <DateTimePicker
            onChange={handleStartDateChange}
            value={dateStart}
            className="modal__form-control btn-block"
          />
        </div>

        <div className="modal__form-group">
          <label className="modal__input-label">Fin evento</label>
          <DateTimePicker
            onChange={handleEndDateChange}
            value={dateEnd}
            minDate={dateStart}
            className="modal__form-control btn-block"
          />
        </div>

        <hr />
        <div className="modal__form-group">
          <label className="modal__input-label">Evento</label>
          <input
            type="text"
            className="modal__form-control in-title"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />

          <textarea
            type="text"
            className="modal__form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
        </div>
        {
          !titleValid && <span className="modal__error"><i className="fas fa-exclamation-circle"></i> El titulo no puede estar vacio</span>
        }
        

        <button type="submit" className="modal__btn btn btn-danger btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};

export default CalendarModal;
