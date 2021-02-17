import "./AboutDesc.css";

function AboutDesc() {
  return (
    <div className="about-desc">
      <h1 className="about-desc__name">
        <span className="greeting">Hi,</span>
        I'm <span class="highlight-text">Soikat</span>
      </h1>
      <p class="about-desc__designation">
        <strong>Front-End Developer</strong>
        {/* <img src="" alt="" /> */}
      </p>
      <p className="about-desc__description">
        I am a passionate Front-End Developer. I have
        <strong> 1 year experience</strong> on Front-End Development.
        <br /> I know well
        <strong> HTML, CSS, Bootstrap, JavaScript and React</strong>. I also
        know about NodeJS/ExpressJS, MongoDB, MySQL, SQL, Scss, BEM methodology.
        I love my designation, I believe on my skills.
      </p>
    </div>
  );
}

export default AboutDesc;
