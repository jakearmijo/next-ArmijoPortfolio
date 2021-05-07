export default function Resume() {
  return (
    <div id="resume">
      <div id="resumeTitle" data-aos="fade-up" className="aos-init aos-animate">
        <h1>Resume</h1>
      </div>
      <div id="resumeMain" data-aos="fade-up" className="aos-init aos-animate">
        <a id="resumeView" href="/JakeArmijoResume.pdf" target="_blank">
          View Resume
          <img src="/images/viewfile.png" />
        </a>
        <a id="resumeDownload" href="/JakeArmijoResume.pdf" download="">
          Download Resume
          <img src="/images/download.png" />
        </a>
      </div>
    </div>
  );
}
