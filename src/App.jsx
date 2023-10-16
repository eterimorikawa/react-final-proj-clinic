import { useState } from "react";

import "./App.css";
import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      name: "Іванова Олена Петрівна",
      phone: "+380123456789",
      specialization: "Стоматолог-терапевт",
    },
    {
      name: "Павлов Михайло Олександрович",
      phone: "+380987654321",
      specialization: "Ортодонт",
    },
    {
      name: "Сидоренко Андрій Володимирович",
      phone: "+380555666777",
      specialization: "Стоматолог-хірург",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="App">
      <Header />
      <div className="body">
        <Table
          rows={rows}
          deleteRow={handleDeleteRow}
          editRow={handleEditRow}
        />
        <button onClick={() => setModalOpen(true)} className="btn">
          Додати
        </button>
        {modalOpen && (
          <Modal
            closeModal={() => {
              setModalOpen(false);
              setRowToEdit(null);
            }}
            onSubmit={handleSubmit}
            defaultValue={rowToEdit !== null && rows[rowToEdit]}
          />
        )}
      </div>
    </div>
  );
}

export default App;
