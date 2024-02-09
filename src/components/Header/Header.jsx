import "./Header.css";
import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";

const navLink = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "users",
    display: "Users",
  },
  {
    path: "about",
    display: "About",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav-wrapper">
            <div className="title">
              <h1>BizConnect</h1>
            </div>

            <div className="navigation">
              <ul className="menu">
                {navLink.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav-active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav-icons">
              <span>
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="" />
              </span>
            </div>

            <div className="mobile-menu">
              <span>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
