import "./Header.css";
import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

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

  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const stickyHeaderFunction = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky-header");
      } else {
        headerRef.current.classList.remove("sticky-header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunction();

    return () => window.removeEventListener("scroll", stickyHeaderFunction);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active-menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav-wrapper">
            <div className="title">
              <h1>BizConnect</h1>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
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
              <div className="mobile-menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
