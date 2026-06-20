import{FaGithub,FaLinkedin,FaEnvelope}
from "react-icons/fa";

function Footer() {
  return (
  <footer class="footer">
    <div class="footer-container">
        <h2>Dinesh Kumar</h2>
        <p>FullStackDeveloper | .NET Developer</p>

        <div class="footer-links">
            <a href="https://github.com/dinesh1102-DK"><FaGithub/> GitHub</a>
            <a href="https://www.linkedin.com/in/dinesh-kumar-s-1bb3403b1"><FaLinkedin/> LinkedIn</a>
            <a href="mailto:dineshsiva1102@gmail.com"><FaEnvelope/>
               Email
            </a>
        </div>

    <hr></hr>
       <p class="copyright">
            © 2026 Dinesh Kumar | Built with ❤️.
       </p>
    </div>
</footer>
  );
}

export default Footer;