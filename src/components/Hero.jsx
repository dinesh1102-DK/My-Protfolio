import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">

      {/* LEFT SIDE */}

      <div className="hero-left">

        <div className="profile-circle">
          <img
            src="Dinesh.jpeg"
            alt="Profile"
          />
        </div>

        <div className="socials">

          <a href=" https://github.com/dinesh1102-DK">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/dinesh-kumar-s-1bb3403b1">
            <FaLinkedin />
          </a>

          <a href="mailto:dineshsiva1102@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="hero-right">

        <span className="badge">
          WELCOME TO MY PORTFOLIO
        </span>

        <h1>
          Hi, I'm
          <br />
          <span>Dinesh Kumar  </span>
        </h1>

        <h2>
          Full Stack Developer
        </h2>

        <p>
          I build responsive and modern web
          applications using 
          HTML,CSS,Javascript,React .NET and SQL.
          Passionate about creating beautiful
          user experiences and solving real-world
          problems through code.
        </p>

        <div className="hero-buttons">

          <button className="btn-primary"
             onClick={()=>window.open("/Resume.pdf","_blank")}>
            <FaDownload />
            Download Resume
          </button>

       <a href="#contact">   <button className="btn-outline">
            
            Contact Me
          </button>
</a>
        </div>

      </div>

    </section>
  );
}