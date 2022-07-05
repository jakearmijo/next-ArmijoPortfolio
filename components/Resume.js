import Image from 'next/image'
import {myImageLoader} from '../lib/utils'
import { 
  Viewfile,
  Download
 } from '../public/images'

 
export default function Resume() {
  return (
    <div id="resume">
      <div id="projectsTitle" data-aos="fade-up" className="aos-init aos-animate">
        <h1>Resume</h1>
      </div>
      <div id="resumeMain" data-aos="fade-up" className="aos-init aos-animate">
        <a id="viewPortfolio" href="/JakeArmijoResume.pdf" target="_blank">
          View Resume
          <Image
            loader={myImageLoader}
            src={Viewfile}
            width="2vw"
            height="2vw" />
        </a>
        <a id="viewPortfolio" href="/JakeArmijoResume.pdf" download="/JakeArmijoResume.pdf">
          Download Resume
          <Image
            loader={myImageLoader}
            src={Download}
            width="2vw"
            height="2vw"
            />
        </a>
      </div>
    </div>
  );
}
