import React,{useState} from 'react';
import styles from '../css/Contact.module.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaGithub,FaLinkedin } from "react-icons/fa";
const ContactUs = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('send successfully!');
  // };

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/mail/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      alert('Failed to send message!');
    }
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.headerContainer}>
        <h1 className={styles.heading}>CONTACT ME</h1>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <span>sujigayatrikadiyala@gmail.com</span>
          </div>
          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.icon} />
            <span>+91 703 656 3390</span>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <span>Andhra Pradesh, India</span>
          </div>
        </div>
        <div>
  <div className={styles.contactwithme}>Connect with me on</div>
  <div className={styles.contactItems}>
    <a
      href="https://github.com/SujiGayatri"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.iconLink}
    >
      <FaGithub className={styles.icon} />
    </a>
    <a
      href="https://www.linkedin.com/in/suji-gayatri-kadiyala-075030256/"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.iconLink}
    >
      <FaLinkedin className={styles.icon} />
    </a>
  </div>
</div>

      </div>

      {/* Form Section */}
      <form className={styles.formContainer} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.input}
            placeholder="Name*"
            name="name"
            value={formData.name} onChange={handleChange}
            required
          />
        <input
          type="email"
          className={styles.input}
          placeholder="Email*"
          name="email"
          value={formData.email} onChange={handleChange}
          required
        />
        <textarea
          className={`${styles.input} ${styles.textArea}`}
          placeholder="Message"
          name="message"
          rows="4"
          value={formData.message} onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
