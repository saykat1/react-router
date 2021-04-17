import "./AboutDesc.css";

function AboutDesc() {
  return (
    <div className="about-desc">
      <h1 className="about-desc__name">
        {/* <span className="greeting">Hi, </span> I'm*/}
        <span className="highlight-text">Nur Mohammad Soikat</span>
      </h1>
      <p className="about-desc__designation">Front-End Developer</p>
      <p className="about-desc__description">
        I am a Javascript focus developer. I have
        <strong> 1-year of experience</strong> in Front-End Development.
        <br />I am good at
        <strong> HTML, CSS, Bootstrap, JavaScript, and React,</strong> also
        capable of using Scss, NodeJS, ExpressJS, MongoDB, Mongoose, MySQL. I
        believe in my skills. I like to write logic. I want to be a MERN Stack
        Developer.
      </p>
    </div>
  );
}

export default AboutDesc;
