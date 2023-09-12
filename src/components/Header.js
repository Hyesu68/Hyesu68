import { Link, Element } from "react-scroll";

const Header = () => {
  return (
    <div className="header-class">
      <div className="bar_menu_container">
        <ul className="bar_menu">
          <li className="bar_li">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="bar_li">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="bar_li">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="bar_li">
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Project
            </Link>
          </li>
          <li className="bar_li">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
