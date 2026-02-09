import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef=useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');
  
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
 const [loading,setLoading]= useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    
    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
     
      
      // Simulate API call delay
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_PUBLIC_KEY,
      )
      
      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      console.error('EMAILJS Error',error);
      setSubmitStatus('error');
    } finally {
      setLoading(false);
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }
  };

  const socialLinks = [
    {
      name: 'WhatsApp',
      url: 'https://chat.whatsapp.com/ISzPWBcam0C4w8c4R7bbr6',
      icon: '💬',
      color: '#25d366'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/gdg.cit',
      icon: '📷',
      color: '#e1306c'
    },
    {
      name: 'GitHub',
      url: '',
      icon: '🐙',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/gdgcit/posts/?feedView=all',
      icon: '💼',
      color: '#0077b5'
    }
  ];

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className={`contact-header ${isVisible ? 'animate' : ''}`}>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to join our community? We'd love to hear from you!
          </p>
        </div>

        <div className="contact-content">
          <div className={`contact-info ${isVisible ? 'animate' : ''}`}>
            <div className="info-card">
              <h3 className="info-title">Let's Connect</h3>
              <p className="info-description">
                Whether you have questions, want to collaborate, or just want to say hello, 
                we're here to listen and help you grow with our community.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h4>Email Us</h4>
                    <a href="mailto:gdsc@cambridge.edu.in" className="contact-link">
                      gdsc@cambridge.edu.in
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Find Us</h4>
                    <p>Cambridge Institute of Technology</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">⏰</div>
                  <div>
                    <h4>Response Time</h4>
                    <p>Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h4 className="social-title">Follow Us</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--color': social.color }}
                      aria-label={social.name}
                    >
                      <span className="social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`contact-form-section ${isVisible ? 'animate' : ''}`}>
            <form onSubmit={handleSubmit} className="contact-form"ref={formRef} >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Your first name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Tell us about yourself, your interests, or ask us anything..."
                  rows="5"
                ></textarea>
              </div>

              <button

                type="submit"
                disabled={loading}
                className={`submit-button ${loading ? 'submitting' : ''} ${submitStatus}`}
              >
                {loading ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <span className="success-icon">✓</span>
                    Message Sent!
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <span className="error-icon">✗</span>
                    Try Again
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="arrow">→</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  Thank you for reaching out! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Contact;