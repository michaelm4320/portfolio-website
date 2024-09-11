import React, { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [recaptchaSize, setRecaptchaSize] = useState('normal'); // default to normal

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle reCAPTCHA token change
  const handleRecaptcha = (token) => {
    setRecaptchaToken(token);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setSubmitStatus('Please complete the reCAPTCHA');
      return;
    }

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });
      formDataToSend.append('recaptchaToken', recaptchaToken);

      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('Form submitted successfully');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setRecaptchaToken(null);
      } else {
        const errorData = await response.text();
        setSubmitStatus(`Failed to submit form: ${errorData}`);
      }
    } catch (error) {
      setSubmitStatus(`Error submitting form: ${error.message}`);
    }
  };

  // Handle screen size changes to switch between compact and normal reCAPTCHA sizes
  useEffect(() => {
    const updateRecaptchaSize = () => {
      if (window.innerWidth <= 1200) {
        setRecaptchaSize('compact');
      } else {
        setRecaptchaSize('normal');
      }
    };

    updateRecaptchaSize(); // Call on component mount to set initial size
    window.addEventListener('resize', updateRecaptchaSize); // Add listener for resizing

    return () => window.removeEventListener('resize', updateRecaptchaSize); // Cleanup on unmount
  }, []);

  return (
    <section className="contact-section" id="MyContact">
      <div className="container">
        <h2 className="contact-title">Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Google reCAPTCHA */}
          <div className="recaptcha">
              <ReCAPTCHA
                sitekey="6LdGkDoqAAAAAIM7o3fOwlAlZZ8szf_1xmcMu79v"
                onChange={handleRecaptcha}
                size={recaptchaSize} // Dynamically set size based on screen width
              />
          </div>
          <button className="btn-contact-send" type="submit">Send</button>
        </form>
        {submitStatus && <p className="submit-status">{submitStatus}</p>}
      </div>
    </section>
  );
};

export default Contact;
