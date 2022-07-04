import Image from 'next/image'
import {myImageLoader} from '../lib/utils'
import { 
  Viewfile,
  Download
 } from '../public/images'

 
export default function Resume() {
  return (
    <div id="resume">
      <div id="resumeTitle" data-aos="fade-up" className="aos-init aos-animate">
        <h1>Resume</h1>
      </div>
      <div id="resumeMain" data-aos="fade-up" className="aos-init aos-animate">
        <a id="resumeView" href="/JakeArmijoResume.pdf" target="_blank">
          View Resume
          <Image loader={myImageLoader} src={Viewfile} layout='fill' />
        </a>
        <a id="resumeDownload" href="/JakeArmijoResume.pdf" download="/JakeArmijoResume.pdf">
          Download Resume
          <Image loader={myImageLoader} src={Download} layout='fill'  />
        </a>
      </div>
    </div>
  );
}
