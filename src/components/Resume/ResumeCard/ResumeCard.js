import "./ResumeCard.css";

function ResumeCard() {
  return (
    <section>
      <section className="resume">
        <h2 className="resume__title section-title">Working Experiences</h2>

        <article className="resume-content">
          <div className="resume-content__year-map">
            <h2>
              <span>2019 &nbsp;</span>
              <span>To &nbsp;</span>
              Present
            </h2>
          </div>

          <div className="resume-content__desc experience">
            <h2 className="experience__designation">Front-End Developer</h2>
            <p className="experience__company-name">b-cause Bangladesh, ltd.</p>
            <p className="experience__responsibility">
              <p>Responsibilities:</p>
              <ul>
                <li>Front End Part from PSD Or Concept</li>
                <li>Working on ERP project</li>
                <li>Complex HTML table design</li>
              </ul>
            </p>
          </div>
        </article>
      </section>

      <section className="resume">
        <h2 className="resume__title section-title">
          Educational Qualification
        </h2>

        <article className="resume-content">
          <div className="resume-content__year-map">
            <h2>
              Start-2018 <br /> Expected-2022
            </h2>
          </div>

          <div className="resume-content__desc experience">
            <h2 className="experience__designation">B.Sc. In CSE</h2>
            <p className="experience__company-name">
              Dhaka International University
            </p>
            <p className="experience__responsibility">
              9th Semester (3 semester remaining)
            </p>
          </div>
        </article>

        <article className="resume-content">
          <div className="resume-content__year-map">
            <h2>
              Start-2013 <br /> Complete-2017
            </h2>
          </div>

          <div className="resume-content__desc experience">
            <h2 className="experience__designation">
              Diploma In Computer Technology
            </h2>
            <p className="experience__company-name">
              Bogura Polytechnic Institute
            </p>
            <p className="experience__responsibility">CGPA: 3.37</p>
          </div>
        </article>
      </section>
    </section>
  );
}

export default ResumeCard;
