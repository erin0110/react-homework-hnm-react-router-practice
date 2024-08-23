import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./NavBar.css";

const NavBar = ({ authenticate, setAuthenticate }) => {
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

  const navigate = useNavigate();
  const search = (e) => {
    if (e.key === "Enter") {
      // 입력한 검색어를 읽어와서 url을 바꿔준다.
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <header>
      <div className="header-inner">
        <div className="heading">
          <h1>
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </h1>
          <div className="lnb">
            <div className="sign">
              {authenticate ? (
                <div onClick={() => setAuthenticate(false)}>
                  <FontAwesomeIcon icon={faUser} />
                  LOGOUT
                </div>
              ) : (
                <div onClick={() => navigate("/login")}>
                  <FontAwesomeIcon icon={faUser} />
                  LOGIN
                </div>
              )}
            </div>

            <div className="search">
              <i>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </i>
              <input
                type="text"
                placeholder="검색"
                onKeyPress={(e) => search(e)}
              />
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
