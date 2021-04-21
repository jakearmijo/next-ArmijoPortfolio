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


function Home({allPostsData}) {
  console.log("🚀 ~ file: index.js ~ line 28 ~ Home ~ allPostsData", allPostsData)
  return (
    <>
      <Head>
        <title>Armijo Algorithm</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
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
      <Footer />
    </>
  );
}
export default Home;
