import React, { useState } from "react";
import emailjs from "emailjs-com";

function LastFooter({ activeSection, setActiveSection }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleClose = () => setActiveSection("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_gwgpibp",
        "template_33hbt8c",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        "uLdUc3VE0kQDYBMZZ"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          handleClose();
        },
        (error) => {
          alert("❌ Failed to send message: " + error.text);
        }
      );
  };

  const handleShow = (section) => setActiveSection(section);

  return (
    <>
      {activeSection && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}>✕</button>

            {activeSection === "contact" && (
              <>
                <h2>📩 Contact Us</h2>
                <form className="contact-form" onSubmit={handleSubmit} >
                  <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                  </div>
                  <button type="submit" className="send-btn">Send Message</button>
                </form>
              </>
            )}

            {activeSection === "home" && (
              <div>
                <h2>🏠 Welcome to ECY Educational Website</h2>
                <p>Explore our courses, resources, and latest educational updates.</p>
              </div>
            )}

            {activeSection === "about" && (
              <div>
                <h2>ℹ️ About Us</h2>
                <p>ECY Educational Website is dedicated to providing high-quality online education and resources for learners worldwide.</p>
              </div>
            )}

            {activeSection === "services" && (
              <div>
                <h2>💼 Our Services</h2>
                <p>We offer online courses, educational consulting, and interactive learning resources to help you achieve your goals.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="last-footer">
        <div className="last-footer-container">
          <div className="last-footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><button onClick={() => handleShow("home")}>Home</button></li>
              <li><button onClick={() => handleShow("about")}>About Us</button></li>
              <li><button onClick={() => handleShow("services")}>Services</button></li>
              <li><button onClick={() => handleShow("contact")}>Contact Us</button></li>
            </ul>
          </div>

          <div className="last-footer-contact" id="contactForm">
            <h3>Contact Info</h3>
            <p><strong>Email:</strong> ECY2025@gmail.com</p>
            <p><strong>Phone:</strong> +20 123 456 7890</p>
            <p><strong>Address:</strong> 123 Education Street, Cairo, Egypt</p>
          </div>
        </div>

        <div className="last-footer-bottom">
          <hr className="footer-divider" />
          <p>© 2025 All rights reserved | ECY Educational Website</p>
        </div>
      </footer>
    </>
  );
}

export default LastFooter;
