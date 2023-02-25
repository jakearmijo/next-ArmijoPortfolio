import Image from 'next/image'
import { 
  ReactLogo,
  ReduxLogo,
  HTMLLogo,
  CSSLogo,
  StyledComponentLogo,
  BootstrapLogo,
  NodeLogo,
  ExpressLogo,
  SequelizeLogo,
  PostgresLogo,
  SocketIOLogo,
  GitLogo,
  GitHubLogo,
  NpmLogo,
  WebpackLogo,
  HerokuLogo,
  TravisCILogo,
  JavascriptLogo,
  PythonLogo,
  VSCODELogo,
  PostmanLogo,
  PosticoLogo,
  MochaLogo,
  ChaiLogo,
  DockerLogo,
  TerraformLogo_2,
  VueLogo,
  FastAPILogo,
  AWSLogo,
  AzureLogo,
  MongoDBLogo
 } from '../public/images'
 import {myImageLoader} from '../lib/utils'

export default function AboutMe() {
  return (
    <div>
      <div id="aboutMe">
        <div
          id="projectsTitle"
          data-aos="fade-up"
          className="aos-init aos-animate"
        >
          <h1>About Me</h1>
        </div>

        <div id="aboutMeMain">
          <div
            id="selfpic"
            data-aos="fade-up"
            className="aos-init aos-animate"
          ></div>

          <p data-aos="fade-up" id="pIntro" className="aos-init aos-animate p-project">
            [ Hello, World, ! ] I am a sociable creator with adoration for variety. 
            As a kid, I lived frequently singing and playing with Legos or Erector sets. 
            As an adult, I helped build commercial buildings, and now I help build software
            solutions. All while still singing. I have a swiss army knife-like mindset and 
            love to learn new things. I am a versatile team player with a vivid imagination. 
            My off-hours creative activities include fly tying, djing, and making my family laugh. 
            I am always willing to chat. Feel free to message me! 
            
            Career switcher 2020 - Girl Dad - Fly Fisher
          </p>
        </div>
      </div>
      <div id="skillsDiv">
        <div id="techTitle" data-aos="fade-up" className="aos-init aos-animate">
          <h3>Technologies I've Worked With</h3>
        </div>
        <div id="skillsMain">
          <div
            className="techDiv aos-init aos-animate"
            id="frontend"
            data-aos="fade-up"
          >
            <div className="techDivTitle">FrontEnd</div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={ReactLogo} alt="React"/>
              <span className="tooltiptext">React</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={VueLogo} alt="Vuejs"/>
              <span className="tooltiptext">Vue.js</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={ReduxLogo} alt="Redux" />
              <span className="tooltiptext">Redux</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={HTMLLogo} alt="HTML" />
              <span className="tooltiptext">HTML</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={CSSLogo} alt="CSS" />
              <span className="tooltiptext">CSS</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={StyledComponentLogo} alt="Styled Components" />
              <span className="tooltiptext">Styled Components</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={BootstrapLogo} alt="Bootstrap" />
              <span className="tooltiptext">Bootstrap</span>
            </div>
          </div>
          <div
            className="techDiv aos-init aos-animate"
            id="backend"
            data-aos="fade-up"
          >
            <div className="techDivTitle">BackEnd</div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={NodeLogo} alt="Node" />
              <span className="tooltiptext">Node</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={ExpressLogo} alt="Express" />
              <span className="tooltiptext">Express</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={FastAPILogo} alt="FastApi" />
              <span className="tooltiptext">FastApi</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={SequelizeLogo} alt="Sequelize Logo" />
              <span className="tooltiptext">Sequelize</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={PostgresLogo} alt="Postgres Logo" />
              <span className="tooltiptext">Postgres</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={MongoDBLogo} alt="Mongo DB Logo" />
              <span className="tooltiptext">MongoDB</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={SocketIOLogo} alt="Socket.io" />
              <span className="tooltiptext">Socket.io</span>
            </div>
          </div>
          <div
            className="techDiv aos-init aos-animate"
            id="devops"
            data-aos="fade-up"
          >
            <div className="techDivTitle">DevOps</div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={GitLogo} alt="Git" />
              <span className="tooltiptext">Git</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={GitHubLogo} alt="GitHub" />
              <span className="tooltiptext">GitHub</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={NpmLogo} alt="Npm" />
              <span className="tooltiptext">Npm</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={WebpackLogo} alt="Webpack" />
              <span className="tooltiptext">Webpack</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={HerokuLogo} alt="Heroku" />
              <span className="tooltiptext">Heroku</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={TravisCILogo} alt="TravisCI" />
              <span className="tooltiptext">TravisCI</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={DockerLogo} alt="Docker" />
              <span className="tooltiptext">Docker</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={TerraformLogo_2} alt="Terraform" />
              <span className="tooltiptext">Terraform</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src="/images/DatadogLogo.png" alt="DatadogLogo" />
              <span className="tooltiptext">Datadog</span>
            </div>
          </div>
          <div
            className="techDiv aos-init aos-animate"
            id="languages"
            data-aos="fade-up"
          >
            <div className="techDivTitle">Languages</div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={JavascriptLogo} alt="Javascript" />
              <span className="tooltiptext">Javascript</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={PythonLogo} alt="Python" />
              <span className="tooltiptext">Python</span>
            </div>
          </div>
          <div
            className="techDiv aos-init aos-animate"
            id="tools"
            data-aos="fade-up"
          >
            <div className="techDivTitle">Tools</div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={VSCODELogo} alt="VSCode" />
              <span className="tooltiptext">VS Code</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={PostmanLogo} alt="Postman" />
              <span className="tooltiptext">Postman</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={PosticoLogo} alt="Postico" />
              <span className="tooltiptext">Postico</span>
            </div>
          </div>
          <div
            className="techDiv aos-init aos-animate"
            id="testing"
            data-aos="fade-up"
          >
            <div className="techDivTitle">Testing</div>
              <div className="tech tooltip">
                <Image loader={myImageLoader} width="3vw" height="3vw"  src={MochaLogo} alt="Mocha" />
                <span className="tooltiptext">Mocha</span>
              </div>
              <div className="tech tooltip">
                <Image loader={myImageLoader} width="3vw" height="3vw"  src={ChaiLogo} alt="Chai" />
                <span className="tooltiptext">Chai</span>
              </div>
           </div>
           <div
            className="techDiv aos-init aos-animate"
            id="testing"
            data-aos="fade-up"
          >
            <div className="techDivTitle">Cloud</div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={AWSLogo} alt="AwsLogo" />
              <span className="tooltiptext">AWS</span>
            </div>
            <div className="tech tooltip">
              <Image loader={myImageLoader} width="3vw" height="3vw"  src={AzureLogo} alt="Azure" />
              <span className="tooltiptext">Awzure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
