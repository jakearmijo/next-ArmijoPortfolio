import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Hello from "../components/Hello";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Hobbies from "../components/Hobbies";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/pokemon/charmander");
  };
  return (
    <>
      <Head>
        <title>Armijo Algorithm</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Hello />
      <Projects />
      <AboutMe />
      <Hobbies />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
export default Home;
