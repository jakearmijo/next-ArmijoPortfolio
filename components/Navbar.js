import { Link as ScrollLink } from "react-scroll";
import Link from 'next/link'

function Navbar() {
  return (
    <>
      <nav>
        <div>
          <a id="logo">Armijo Algorithm</a>
        </div>
        <div className="nav-links">
          <ScrollLink to="projects" activeClass="active" spy={true} smooth={true}>
            PORTFOLIO
          </ScrollLink>
          <ScrollLink to="aboutMe" activeClass="active" spy={true} smooth={true}>
            ABOUT
          </ScrollLink>
          <ScrollLink to="resume" activeClass="active" spy={true} smooth={true}>
            RESUME
          </ScrollLink>
          <ScrollLink to="contactTitle" activeClass="active" spy={true} smooth={true}>
            CONTACT
          </ScrollLink>
          <Link target="_blank" href="https://github.com/jakearmijo">
            GITHUB
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/jake-armijo/">
            LINKEDIN
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
