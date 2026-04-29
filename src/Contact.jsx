import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-top">
        <p className="tag">LET'S CONNECT</p>
        <h2>Contact Me</h2>
        <p className="subtext">
          Available for freelance projects, internships and full-time
          opportunities. Let’s build something amazing together.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-card">
          {/* <span className="icon">📧</span> */}
          <h3>Email</h3>
          <p>divyamehta610@gmail.com</p>
        </div>

        <div className="contact-card">
          {/* <span className="icon">📞</span> */}
          <h3>Phone</h3>
          <p>+91 70273 16762</p>
        </div>

        <div className="contact-card">
          {/* <span className="icon">📍</span> */}
          <h3>Location</h3>
          <p>India</p>
        </div>
      </div>

      <div className="contact-btn">
        <a href="mailto:divyamehta610@gmail.com" className="hire-btn">
          Hire Me
        </a>
      </div>
    </section>
  );
}

export default Contact;