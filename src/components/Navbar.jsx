import {
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaPaperPlane
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        Dinesh Kumar S
      </h2>

      <ul className="nav-links">

        <li>
          <a href="#about">
            <FaUser />
            About
          </a>
        </li>

        <li>
          <a href="#skills">
            <FaCode />
            Skills
          </a>
        </li>

        <li>
          <a href="#projects">
            < FaProjectDiagram />
            Projects
          </a>
        </li>

        <li>
          <a href="#contact">
            <FaPaperPlane />
            Contact
          </a>
        </li>

      </ul>

    </nav>
  );
}