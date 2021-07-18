import './footer.css';
import './footer_responsive.css';

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer_container">
          <div className="logo">
            <a href="/">Arvh.</a>
          </div>
          <div className="footer_links_container">
            <ul className="footer_links">
              <li><a href="/" id="about">About Us</a></li>
              <li><a href="/" id="about">How it Works</a></li>
              <li><a href="/" id="services">FAQ</a></li>
              <li><a href="/" id="projects">Contact Us</a></li>
              <li><a href="/" id="projects">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
