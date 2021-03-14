import Carousel from "styled-components-carousel";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import ProjectCarousel from './ProjectCarousel'

export default function Projects() {
  const [sliderRef] = useKeenSlider({
    spacing: 10,
    slidesPerView: 2,
    centered: true,
    vertical: true,
    loop: true,
  })

  return (
    <div id="projects">
      <div
        id="projectsTitle"
        data-aos="fade-up"
        className="aos-init aos-animate"
      >
        <h1>Portfolio</h1>
      </div>
      <div id="phutbol" data-aos="fade-up" className="aos-init aos-animate">
        <h1 className="projectTitle">Phutbol</h1>
        <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">1</div>
        <div className="keen-slider__slide number-slide2">2</div>
        <div className="keen-slider__slide number-slide3">3</div>
    
        <ProjectCarousel />
        </div>
        <div className="project-description">
          <p className="p-project">
            Built on Phaser with Javascript as its bones. This socket driven app
            gives friends and family a chance to play soccer against each other
            during the pandemic. An easy appealing GUI makes it seamless to set
            up or join a new game. At project conception, our entire team wanted
            to make a game. Everyone stayed energized and motivated until the
            end and beyond. This project offered all of us a chance to use new
            technologies that we had never previously ventured into. We gained
            Phaser experience that was not only fun but worthwhile. Phaser as
            the main component of the game really made it the most interesting
            piece of the puzzle. Socket.io is the library driving the real-time
            link to all the players. This had its challenges and offered the
            team a good chance to collaborate and pair code. We do have future
            plans to use Firebase for things such as a player leaderboard,
            profile creation, character editing, and much more. We are pleased
            with the product we have to offer on this day and are all on board
            to continue to improve this app.
          </p>
          <p className="p-project p-tech">
            Technologies: JavaScript, Phaser, Socket.IO, Firebase
          </p>
        </div>
        <div className="projectLinks">
          <a href="http://phutbol.herokuapp.com/">
            Try Demo{" "}
            <img src="https://chrischindev.com/assets/externallink2.png" />
          </a>
          <a href="https://github.com/2006-links-light/phutbol">
            View Code <img src="https://chrischindev.com/assets/github3.png" />
          </a>
          <a href="https://youtu.be/XtMdD3XnvXQ">
            Watch Presentation{" "}
            <img src="https://chrischindev.com/assets/video.png" />
          </a>
        </div>
      </div>
      <div id="stackawat" data-aos="fade-up" className="aos-init aos-animate">
        <h1 className="projectTitle">Stackawat</h1>
        <div className="carousel-container">
          {/* <Carousel center infinite showArrows showIndicator slidesToShow={1}>
            <div>
              <img className="projectImage" src="StackAWat-BTPA-layout.png" />
              <div className="text">
                Product layout - Layout shows the product and is linked to
                Watson.
              </div>
            </div>
            <div>
              <img className="projectImage" src="StackAWat-starting.png" />
              <div className="text">
                Engage in a conversation with Watson and ask about products.
              </div>
            </div>
            <div>
              <img className="projectImage" src="StackAWat-Ordering2.png" />
              <div className="text">
                Ordering Screen - Complete an order with Watson.
              </div>
            </div>
          </Carousel> */}
        </div>
        <div className="project-description">
          <p className="p-project">
            Stackawat is a customer chatbot with IBM Watson built in 2 days. I
            integrated it into an existing planned guitar cable e-commerce site.
            This bot would allow users to inquire about products while also
            leading them to purchase the items. I have plans to add more
            features including more customer service and account/payment
            procedures.
          </p>
          <p className="p-project p-tech">
            Technologies: PostgreSQL, Sequelize, Express, Node, React, Redux,
            IBM Cloud, IBM Discovery, IBM Watson
          </p>
        </div>
        <div className="projectLinks">
          <a href="https://github.com/jakearmijo/cableBuilderFull">
            View Code <img src="https://chrischindev.com/assets/github3.png" />
          </a>
          <a href="https://youtu.be/AGeLlD0xjL0">
            Watch Presentation{" "}
            <img src="https://chrischindev.com/assets/video.png" />
          </a>
        </div>
      </div>
      <div
        id="graceshopper"
        data-aos="fade-up"
        className="aos-init aos-animate"
      >
        <h1 className="projectTitle">JDB CARS</h1>
        <div className="carousel-container">
          {/* <Carousel center infinite showArrows showIndicator slidesToShow={1}>
            <div>
              <img className="projectImage" src="Checkout-cars-JDB.png" />
              <div className="text">
                Check out process with a shopping cart.
              </div>
            </div>
            <div>
              <img className="projectImage" src="Start-JDB-Cars.png" />
              <div className="text">Log In or surf the site as a guest.</div>
            </div>
            <div>
              <img className="projectImage" src="Search-cars-JDB.png" />

              <div className="text">View a list of our inventory.</div>
            </div>
          </Carousel> */}
        </div>
        <div className="project-description">
          <p className="p-project">
            JDB Cars is a mock e-commerce site for buying and selling vehicles.
            Want to sell your old beater? Want to purchase a brand new set of
            wheels? We can handle that. The site features cart functionality,
            guest and user checkout, and order history. This website was created
            in 1 week in an agile environment with a team of 3.
          </p>
          <p className="p-project p-tech">
            Technologies: PostgreSQL, Sequelize, Express, Node, React, Redux
          </p>
        </div>
        <div className="projectLinks">
          <a href="https://github.com/2006-gs-leo/grace-shopper">
            View Code <img src="https://chrischindev.com/assets/github3.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
