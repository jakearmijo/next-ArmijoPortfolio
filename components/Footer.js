import Image from 'next/image'

export default function Footer() {
  return (
    <div>
      <footer>
        <div id="footer-links">
          <a href="mailto:armijojake@yahoo.com"/>
          <Image src="/images/sendit.png" width='30px' height='30px'/>

          <a href="https://www.linkedin.com/in/jake-armijo/"/>
          <Image src="/images/LinkedIn.png" width='30px' height='30px'/>

          <a href="https://github.com/jakearmijo" />
          <Image src="/images/GitHubLogo.png" width='30px' height='30px'/>
        </div>
        <div id="copyright">
          © <span id="year">2020</span> Jake Armijo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
