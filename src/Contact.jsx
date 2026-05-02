import "./Contact.css";

function Contact() {
  return (
    <section id="contact"className="contact-section">
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
    <p>


<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=divyamehta610@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  divyamehta610@gmail.com
</a>
</p>
        </div>

        <div className="contact-card">
          {/* <span className="icon">📞</span> */}
          <h3>Phone</h3>
          <p><a
  href="https://wa.me/917027460572"
  target="_blank"
  rel="noopener noreferrer"
>
  7027460572
</a></p>
        </div>

        <div className="contact-card">
          {/* <span className="icon">📍</span> */}
          <h3>Location</h3>
          <p>India</p>
        </div>
      </div>

      {/* <div className="contact-btn">
       <a
  href="mailto:divyamehta610@gmail.com?subject=Hiring Inquiry&body=Hi Divya, I want to connect with you."
  className="hire-btn"
>
  Hire Me
</a>
      </div> */}
    </section>
  );
}

export default Contact;
