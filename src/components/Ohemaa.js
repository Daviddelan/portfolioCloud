// from ohemaas-page

import React from 'react';

const Ohemaa = () => {
  return (
    <div className="container ohemaa-page">
      <style>
        {`
          .ohemaa-page {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #fff;
            padding-top: 100px; /* Adjust this value to match your navbar height */
            background: linear-gradient(135deg, #333, #1a1a1a); /* Dark gradient background */
            min-height: 100vh;
          }

          .profile-section {
            text-align: center;
            margin-bottom: 40px;
          }

          .profile-image {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-top: 20px;
            border: 5px solid #6c63ff;
          }

          .section-title {
            font-size: 32px;
            margin-top: 30px;
            color: #fff;
            background: linear-gradient(135deg, #6c63ff, #a855f7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-align: center;
          }

          .details-section {
            display: flex;
            justify-content: space-around;
            width: 100%;
            max-width: 800px;
            margin-top: 40px;
            text-align: center;
          }

          .details-section .education, .details-section .skills {
            width: 45%;
            background-color: #262626;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
          }

          h2 {
            font-size: 36px;
            color: #e5e5e5;
            margin: 20px 0;
            font-weight: bold;
          }

          h3 {
            font-size: 24px;
            color: #e0e0e0;
            margin-bottom: 20px;
            font-weight: bold;
            position: relative;
          }

          h3::after {
            content: "";
            display: block;
            width: 50px;
            height: 2px;
            background: linear-gradient(135deg, #6c63ff, #a855f7);
            margin: 10px auto 0;
          }

          p {
            font-size: 16px;
            line-height: 1.6;
            color: #b3b3b3;
          }

          .contact-info {
            text-align: center;
            margin-top: 40px;
            font-size: 16px;
            color: #999;
          }

          .skills p {
            font-size: 18px;
            margin-top: 10px;
          }
        `}
      </style>
      <div className="profile-section">
        <img src="/29E42FAC-AB7A-443A-8FBE-4361F85DB302.jpeg" alt="Profile" className="profile-image" />
        <h2>Ohemaa Ama Ampomaah Boakye</h2>
        <h3>About Me</h3>
        <p>
          I’m a final-year Computer Science student at Ashesi University in Ghana. With a passion for technology and innovation,
          I am developing strong technical skills and gaining hands-on experience in software development.
          Outside of my studies, I enjoy reading and watching series to relax and get inspired.
          I'm excited to keep exploring and growing my skills in the tech field.
        </p>
      </div>

      <h2 className="section-title">MY PROFILE</h2>

      <div className="details-section">
        <div className="education">
          <h3>EDUCATION</h3>
          <p>Akosombo International School</p>
          <p>• Business Administration</p>
          <p>Ashesi University</p>
          <p>• Bachelor of Computer Science</p>
        </div>

        <div className="skills">
          <h3>SKILLS</h3>
          <p>• Problem Solving</p>
          <p>• Communication</p>
          <p>• Management</p>
          <p>• Teamwork</p>
        </div>
      </div>

      <div className="contact-info">
        <p>Email: ohemaa.boakye@ashesi.edu.gh</p>
      </div>
    </div>
  );
};

export default Ohemaa;
