import Head from "next/head";
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
    <div className="main">
      <Head>
        <title>The Armijo Algorithm</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LLL7EVW69L"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-LLL7EVW69L');
        </script>
      </Head>
      <Navbar />
      <Hello />
      <Projects />
      <AboutMe />
      <DiscordWidget />
      <Hobbies />
      <Resume />
      <Contact />
      <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/19915776.js"></script>
      <Footer />
    </div>
  );
}
export default Home;
