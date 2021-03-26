import "./AboutDesc.css";

function AboutDesc() {
  return (
    <div className="about-desc">
      <h1 className="about-desc__name">
        <span className="greeting">Hi, </span>
        I'm <span class="highlight-text">Soikat</span>
      </h1>
      <p class="about-desc__designation">Front-End Developer</p>
      <p className="about-desc__description">
        I am a Javascript focus developer. I have
        <strong> 1 year experience</strong> on Front-End Development.
        <br /> I know well
        <strong> HTML, CSS, Bootstrap, JavaScript and React</strong>. I also
        know Scss, BEM methodology, NodeJS/ExpressJS, MongoDB, SQL. I believe in
        my skills. I like to write logic. I want to be a MERN Stack Developer.
      </p>
    </div>
  );
}

export default AboutDesc;
