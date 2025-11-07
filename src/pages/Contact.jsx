import './Page.css'

function Contact() {
  return (
    <div className="page">
      <h1 className="page-title">Contact Us</h1>
      
      <div className="page-content">
        <p className="page-text">
          Have questions about the Founder Fit Quiz? We'd love to hear from you!
        </p>

        <div className="contact-form">
          <form className="form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="form-textarea"
                rows="5"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button type="submit" className="form-button">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-info">
          <p className="page-text">
            <strong>Note:</strong> This is a demo contact form. To make it functional, you'll need 
            to connect it to a backend service or email service like Formspree, EmailJS, or your own API.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact

