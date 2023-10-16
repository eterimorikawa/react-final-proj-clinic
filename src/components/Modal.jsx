import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      name: "",
      phone: "",
      specialization: "стоматолог-терапевт",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.name && formState.phone && formState.specialization) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="name">П.І.Б. лікаря</label>
            <input name="name" onChange={handleChange} value={formState.name} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Контактний номер</label>
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              value={formState.phone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="specialization">Спеціалізація</label>
            <select
              name="specialization"
              onChange={handleChange}
              value={formState.specialization}
            >
              <option value="стоматолог-терапевт">Стоматолог-терапевт</option>
              <option value="ортодонт">Ортодонт</option>
              <option value="стоматолог-хірург">Стоматолог-хірург</option>
              <option value="імплантист">Імплантист</option>
              <option value="дитячий стоматолог">Дитячий стоматолог</option>
            </select>
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Зберегти
          </button>
        </form>
      </div>
    </div>
  );
};
