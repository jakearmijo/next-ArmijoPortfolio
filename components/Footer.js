import Image from "next/image";
import { SendItLogo, GitHubLogo, LinkedInLogo } from "../public/images";
import { myImageLoader } from "../lib/utils";

export default function Footer() {
  return (
    <div>
      <footer>
        <div id="footer-links">
          <a href="mailto:armijojake@yahoo.com" />
          <Image
            loader={myImageLoader}
            src={SendItLogo}
            width="30px"
            height="30px"
          />
          <a
            href="https://www.linkedin.com/in/jake-armijo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              loader={myImageLoader}
              src={LinkedInLogo}
              width="30px"
              height="30px"
            />
          </a>
          <a
            href="https://github.com/jakearmijo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              loader={myImageLoader}
              src={GitHubLogo}
              width="30px"
              height="30px"
            />
          </a>
        </div>
        <div id="copyright">
          © <span id="year">2020</span> Jake Armijo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
