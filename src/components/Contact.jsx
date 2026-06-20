import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact">

      <h2 className="section-title">
        <span>Contact Me</span>
      </h2>

      <div className="contact-container">


<div class="contact-card">
    <h3>Get In Touch</h3>

    <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <div>
            <h4>Email</h4>
            <p>dineshsiva1102@gmail.com</p>
        </div>
    </div>

    <div class="contact-item">
        <i class=" fab fa-github"></i>
        <div>
            <h4>GitHub</h4>
            <p>https://github.com/dinesh1102-DK</p>
        </div>
    </div>

    <div class="contact-item">
        <i class="fab fa-linkedin"></i>
        <div>
            <h4>LinkedIn</h4>
            <p>https://www.linkedin.com/in/dinesh-kumar-s-1bb3403b1</p>
        </div>
    </div>

    <div class="contact-item">
        <i class="fas fa-phone"></i>
        <div>
            <h4>Phone</h4>
            <p>+91 6382556959</p>
        </div>
    </div>

    <div class="contact-item">
        <i class="fas fa-map-marker-alt"></i>
        <div>
            <h4>Location</h4>
            <p>Chennai, Tamil Nadu, India</p>
        </div>
    </div>
</div>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message Sent Successfully!");
          }}
        >

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}