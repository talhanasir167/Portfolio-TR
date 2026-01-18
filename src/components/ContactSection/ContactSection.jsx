import './ContactSection.css'

const ContactSection = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:sample.email@example.com'
  }

  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-text">
          <p className="contact-subtitle">That's all for now.</p>
          <h2 className="contact-title">Got a project in mind? Let's talk</h2>
          <div className="contact-info">
            <p><strong>Email:</strong> sample.email@example.com</p>
            <p><strong>Phone:</strong> (+1) 555-123-4567</p>
          </div>
        </div>
        <button className="contact-button" onClick={handleContactClick}>
          Get in touch
        </button>
      </div>
    </section>
  )
}

export default ContactSection

