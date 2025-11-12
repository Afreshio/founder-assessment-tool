import { useState } from 'react'
import './Page.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdkpqvnj'

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value
    })
    setStatus('') // Clear status when user types
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page">
      <h1 className="page-title">Contact Us</h1>
      
      <div className="page-content">
        <p className="page-text">
          Have questions about coaching? We'd love to hear from you!
        </p>

        <div className="contact-options">
          <div className="contact-option">
            <h3 className="contact-option-title">Book a Complimentary Call</h3>
            <p className="contact-option-description">
              Schedule a free 30-minute Zoom call to discuss your coaching needs
            </p>
            <a 
              href="https://calendly.com/douglas-stevenson" 
              target="_blank" 
              rel="noopener noreferrer"
              className="calendly-button-contact"
            >
              Book a Complimentary Call
            </a>
          </div>

          <div className="contact-divider">
            <span className="divider-text">OR</span>
          </div>

          <div className="contact-option">
            <h3 className="contact-option-title">Send Us a Message</h3>
            <p className="contact-option-description">
              Prefer to email? Fill out the form below and we'll get back to you
            </p>
            <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
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
                value={formData.email}
                onChange={handleChange}
                required
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
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {status === 'success' && (
              <div className="form-message form-message-success">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {status === 'error' && (
              <div className="form-message form-message-error">
                Sorry, there was an error sending your message. Please try again or contact us directly.
              </div>
            )}

            <button 
              type="submit" 
              className="form-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact

