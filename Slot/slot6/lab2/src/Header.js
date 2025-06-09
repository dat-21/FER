import React from "react";
import "./Booking.css";

function Header() {
  return (
    <div className="container-fluid bg-gray">
      <div className="row d-flex justify-content-between px-6 py-2">
        <div className="col-8 container d-flex gap-4 text-white align-items-center">
          <div className="title">
            <h2>Pizza House</h2>
          </div>
          <div className="menu">
            <ul className="nav fs-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <form
            className="d-flex"
            role="search"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <div className="input-group w-100">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-danger" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
