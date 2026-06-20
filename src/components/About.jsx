import { FaUser } from "react-icons/fa";

export default function About() {
  return (
    <section id="about">

      <h2 className="section-title">
        
        <span>About Me</span>
      </h2>

      <div className="about-card">

        <div className="about-icon">
       
        </div>

        <div>

          <h3 style={{ marginBottom: "15px" }}>
            Full Stack Developer
          </h3>

          <p
            style={{
              color: "#d8d8d8",
              lineHeight: "1.9"
            }}
          >
            I am a passionate Full Stack Developer
            with strong knowledge in 
            HTML, CSS, JavaScript,React,.NET and SQL.

            I enjoy building responsive websites,
            modern web applications and solving
            real-world problems through code.

            My goal is to create clean,
            scalable and user-friendly solutions.
          </p>

        </div>

      </div>

    </section>
  );
}