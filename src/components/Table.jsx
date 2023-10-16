import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>П.І.Б. лікаря</th>
            <th>Контактний номер</th>
            <th>Спеціалізація</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const specializationText =
              row.specialization.charAt(0).toUpperCase() +
              row.specialization.slice(1);

            return (
              <tr key={idx}>
                <td>{row.name}</td>
                <td>{row.phone}</td>
                <td>
                  <span>{specializationText}</span>
                </td>
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
