export default function Projects() {
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
        <img
          className="projectImage"
          src="/Phutbol.svg"
        />
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
            <img src="/externallink2.png" />
          </a>
          <a href="https://github.com/2006-links-light/phutbol">
            View Code <img src="/github3.png" />
          </a>
          <a href="https://youtu.be/XtMdD3XnvXQ">
            Watch Presentation{" "}
            <img src="/video.png" />
          </a>
        </div>
      </div>
      <div id="stackawat" data-aos="fade-up" className="aos-init aos-animate">
        <h1 className="projectTitle">Stackawat</h1>
        <img
          className="projectImage"
          src="/StackAWat-BTPA.svg"
        />
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
            View Code <img src="/github3.png" />
          </a>
          <a href="https://youtu.be/AGeLlD0xjL0">
            Watch Presentation{" "}
            <img src="/video.png" />
          </a>
        </div>
      </div>
      <div
        id="graceshopper"
        data-aos="fade-up"
        className="aos-init aos-animate"
      >
        <h1 className="projectTitle">JDB CARS</h1>
        <img
          className="projectImage"
          src="/JDBCars.svg"
        />
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
            View Code <img src="/github3.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
