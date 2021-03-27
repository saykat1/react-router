import { FaFacebook, FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
import "./SocialIcons.css";

function SocialIcons() {
  return (
    <section className="contact-area mt-2">
      <article article className="social-icons">
        {/* <p className="msg">Please feel free to contact me:</p>
        <p className="email">nurcse5@gmail.com</p> */}
        <a
          href="https://www.facebook.com/nmsoikat"
          target="_blank"
          className="social-icons__item facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/nur-mohammad-soikat-b4b9b4150/?trk=public-profile-join-page"
          target="_blank"
          className="social-icons__item linkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/saykat1"
          target="_blank"
          className="social-icons__item github"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.hackerrank.com/nurcse5"
          target="_blank"
          className="social-icons__item hackerRank"
        >
          <FaHackerrank />
        </a>
      </article>
    </section>
  );
}

export default SocialIcons;
