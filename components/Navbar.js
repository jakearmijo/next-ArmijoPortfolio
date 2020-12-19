import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      <nav>
        <div>
          <a id="logo">Armijo Algorithm</a>
        </div>
        <div className="nav-links">
          <Link to="projects" activeClass="active" spy={true} smooth={true}>
            PORTFOLIO
          </Link>
          <Link to="aboutMe" activeClass="active" spy={true} smooth={true}>
            ABOUT
          </Link>
          <Link to="resume" activeClass="active" spy={true} smooth={true}>
            RESUME
          </Link>
          <Link to="contactTitle" activeClass="active" spy={true} smooth={true}>
            CONTACT
          </Link>
          <a target="_blank" href="https://github.com/jakearmijo">
            GITHUB
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/jake-armijo/">
            LINKEDIN
          </a>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
