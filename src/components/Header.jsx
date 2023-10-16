import React from "react";

import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <h1>Клініка</h1>
      </div>
      <div className="header_list">
        <ul>
          <li>
            <a href="#">Головна</a>
          </li>
          <li>
            <a href="#">Запис</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
