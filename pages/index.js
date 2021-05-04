import Head from "next/head";
import Link from 'next/link'

import Navbar from "../components/Navbar";
import Hello from "../components/Hello";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Hobbies from "../components/Hobbies";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import DiscordWidget from "../components/DiscordWidget";


function Home() {
  return (
    <>
      <Head>
        <title>Armijo Algorithm - Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <body>
      <h1 className="title">
        My{' '}
        <Link href="/posts/first-post">
          <a>First Blog Post!</a>
        </Link>
      </h1>
      <Hello />
      <Projects />
      <AboutMe />
      <DiscordWidget />
      <Hobbies />
      <Resume />
      <Contact />
      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/19915776.js"></script>
      </body>
      <Footer />
         
    </>
  );
}
export default Home;
