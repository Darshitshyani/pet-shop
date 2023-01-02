import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { GiShoppingBag } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import logo from "../img/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="abs"></div>
      <div className="container">
        <div className="d-flex justify-content-end">
          <div className="d-flex support-head">
            <div className="d-flex align-items-center justify-content-center">
              <LocalPhoneIcon />
              <p className="m-0"> 24x7 Support</p>
            </div>
            <div className="d-flex">
              <div class="dropdown">
                <button
                  class="btn  dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hello Jasmine
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item" type="button">
                      Action
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Another action
                    </button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">
                      Something else here
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">
          <Link to="/">
            <img src={logo} />
          </Link>

          <div className="d-flex align-items-center d1">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Feed
              </button>
              <ul class="dropdown-menu">
                <li>
                  <button class="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                class="btn  dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Store
              </button>
              <ul class="dropdown-menu">
                <li>
                  <button class="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                class="btn  dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </button>
              <ul class="dropdown-menu">
                <li>
                  <button class="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <button
                class="btn  dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SOS
              </button>
              <ul class="dropdown-menu">
                <li>
                  <button class="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex d2">
            <SearchIcon className="i1" />
            <Link to="cart">
              <GiShoppingBag className="i2" />
            </Link>
            <FaBell className="i3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
