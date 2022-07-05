import { Link as ScrollLink } from "react-scroll";
import Link from 'next/link'

function Navbar() {
  return (
      <nav>
        {/* <div>
          <div id="logo"> Armijo Algorithm</div>
        </div> */}
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
          <Link target="_blank" href="https://jakearmijo.com/blog">
            BLOG
          </Link>
          <Link target="_blank" href="https://github.com/jakearmijo">
            GITHUB
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/jake-armijo/">
            LINKEDIN
          </Link>
      </nav>
  );
}
export default Navbar;
