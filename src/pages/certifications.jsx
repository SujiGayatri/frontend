// App.js
import React from 'react';
import styles from '../css/certification.module.css';

function Certifications() {
  const cards = [
    {
      title: "Certified System Administrator",
      by: "Red Hat",
      id: "240-111-369",
      issued: "24 July 2024",
      link: "https://drive.google.com/file/d/1GlmuHW2JDcpP_hD5PxMhiRqvKFE3qtEf/view?usp=sharing",
    },
    {
      title: "JavaScript",
      by: "Infosys",
      id: "N/A",
      issued: "17 Nov 2024",
      link: "https://drive.google.com/file/d/1p9nSA4G1FK8N4QlISpXGV25d-eF0TOBo/view?usp=sharing",
    },
    {
      title: "Prompt Engineering for Everyone",
      by: "IBM Developer",
      id: "N/A",
      issued: "21 June 2024",
      link: "https://drive.google.com/file/d/1-xEAVjRiqVhfw4vbAdlIYyQ6lzrO9Gqg/view?usp=sharing",
    },
    {
      title: "Node.js",
      by: "Infosys",
      id: "N/A",
      issued: "17 Nov 2024",
      link: "https://drive.google.com/file/d/12xqlDwBVWeLk_HQPjJJOPVzC30btC46I/view?usp=sharing",
    },
    {
      title: "HTML Attributes and Tags",
      by: "Great Learning",
      id: "N/A",
      issued: "April 2023",
      link: "https://drive.google.com/file/d/1tpA4V-ho3zyOlJL2mE-QX3dWgAuOS6BE/view?usp=sharing",
    },
    {
      title: "Introduction to Networks",
      by: "Cisco Networking Academy",
      id: "N/A",
      issued: "29 Jul 2024",
      link: "https://drive.google.com/file/d/1MwJ9sR2OuhC8Jgf0kfrqn4MrGWmNicK7/view?usp=sharing",
    },
    {
      title: "Introduction to Data Science with Python",
      by: "HarvardX",
      id: "N/A",
      issued: "14 May 2024",
      link: "https://drive.google.com/file/d/1OJF80MSp9O4cBczu-lNdh-Q24HO0k-a9/view?usp=sharing",
    },
    {
      title: "Java Programming Fundamentals",
      by: "HarvardX",
      id: "N/A",
      issued: "8 June 2024",
      link: "https://drive.google.com/file/d/1KBs0OM6ptLdot7wGxROmZME5uqCVpGHu/view?usp=sharing",
    },
  ];

  return (
    <div className={styles.main}>
      <h1 className={styles.certificates}>Certificates</h1>
      <div className={styles.container}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardContent}>Issued by: {card.by}</p>
            <p className={styles.cardContent}>Certificate ID: {card.id}</p>
            <p className={styles.cardContent}>Issued on: {card.issued}</p>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardButton}
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
