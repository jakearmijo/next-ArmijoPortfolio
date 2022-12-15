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
import Script from 'next/script'



function Home() {
  
  return (
    <div className="main">
      <Head>
        <title>The Armijo Algorithm</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
        <Script strategy="afterInteractive" async src='https://www.googletagmanager.com/gtag/js?id=G-LLL7EVW69L'></Script>
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GOOGLE_TRACKING_IN}', {
                page_path: window.location.pathname,
              });
            `,
            }}
        />
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
