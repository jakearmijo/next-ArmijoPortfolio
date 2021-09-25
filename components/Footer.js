import Image from 'next/image'
import { 
  SendItLogo,
  GitHubLogo,
  LinkedInLogo
 } from '../public/images'

export default function Footer() {
  return (
    <div>
      <footer>
        <div id="footer-links">
          <a href="mailto:armijojake@yahoo.com"/>
          <Image src={SendItLogo} width='30px' height='30px'/>

          <a href="https://www.linkedin.com/in/jake-armijo/"/>
          <Image src={LinkedInLogo} width='30px' height='30px'/>

          <a href="https://github.com/jakearmijo" />
          <Image src={GitHubLogo} width='30px' height='30px'/>
        </div>
        <div id="copyright">
          © <span id="year">2020</span> Jake Armijo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
