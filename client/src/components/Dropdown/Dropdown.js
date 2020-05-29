import React from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";

const Dropdown = () => {
  return (
    <div className="dropdown is-active">
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>Dropdown button</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <Link to="#" className="dropdown-item">
            Dropdown item
          </Link>
          <Link className="dropdown-item">Other dropdown item</Link>
          <Link to="#" className="dropdown-item">
            Active dropdown item
          </Link>
          <Link to="#" className="dropdown-item">
            Other dropdown item
          </Link>
          <hr className="dropdown-divider" />
          <Link to="#" className="dropdown-item">
            With a divider
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
