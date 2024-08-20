import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../assets/images/logo.png";
import "./NavBar.css";

const menuList = [
  "Women",
  "Men",
  "Baby",
  "Kids",
  "H&M HOME",
  "Sport",
  "Sale",
  "지속가능성",
];
const NavBar = () => {
  return (
    <header>
      <div className="header-inner">
        <div className="heading">
          <h1>
            <img src={logo} alt="" />
          </h1>
          <div className="lnb">
            <div className="sign">
              <a href="#n">
                <FontAwesomeIcon icon={faUser} />
                LOGIN
              </a>
            </div>
            <div className="search">
              <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <input type="text" placeholder="검색" />
            </div>
          </div>
        </div>
        <div className="nav">
          <ul className="menu">
            {menuList.map((menu, index) => {
              return (
                <li key={index}>
                  <a href="#n">{menu}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
