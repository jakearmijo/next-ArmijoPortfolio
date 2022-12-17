import Link from "next/link";

function NavbarBlog() {
  return (
    <nav>
      <Link href="/">
        PORTFOLIO
      </Link>
      <Link href="/">
        ABOUT
      </Link>
      <Link href="/">
        RESUME
      </Link>
      <Link href="/">
        CONTACT
      </Link>
      <Link href="https://jakearmijo.com/blog">
        BLOG
      </Link>
      <Link href="http://todaystilts.jakearmijo.com/">
        Today's Tilts
      </Link>
      <Link href="https://github.com/jakearmijo">
        GITHUB
      </Link>
      <Link href="https://www.linkedin.com/in/jake-armijo/">
        LINKEDIN
      </Link>
    </nav>
  );
}
export default NavbarBlog;
