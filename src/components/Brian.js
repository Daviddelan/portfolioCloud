import React from 'react';
import BrianImage from '../assets/img/IMG_4224.jpeg';

const Brian = () => {
  return (
    <div className="container brian-page">
      <style>
        {`
          .brian-page {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #fff;
            padding-top: 100px; /* Adjust this value to match your navbar height */
          }

          .profile-section {
            text-align: center;
            margin-bottom: 40px;
          }

          .profile-image {
            width: 300px;
            height: 320px;
            border-radius: 50%;
            margin-bottom: 20px;
            border: 4px solid #fff;
          }

          .section-title {
            font-size: 24px;
            margin: 30px 0;
          }

          .details-section {
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 800px;
            margin-bottom: 40px;
          }

          .details-section .education, .details-section .skills {
            width: 45%;
          }

          h3 {
            font-size: 20px;
            margin-bottom: 10px;
          }

          p {
            line-height: 1.6;
            margin-bottom: 10px;
          }

          .contact-info {
            margin-top: 20px;
            font-size: 16px;
          }
        `}
      </style>
      <div className="profile-section">
        <img src={BrianImage} alt="Brian" className="profile-image" />
        <h2>Brian Kwame Asiedu Antwi</h2>
        <h3>About Me</h3>
        <p>
          I’m a senior Computer Science student at Ashesi University in Ghana, passionate about leveraging technology to create impactful solutions. Through my studies and projects, I am honing my technical skills and gaining valuable experience in software development. Outside academics, I unwind by diving into books and series, finding both relaxation and inspiration. I’m driven to continue expanding my knowledge and making meaningful strides in the tech world.
        </p>
      </div>

      <h2 className="section-title">MY PROFILE</h2>

      <div className="details-section">
        <div className="education">
          <h3>EDUCATION</h3>
          <p>Mfantsipin Secondary School</p>
          <p>• General Science</p>
          <p>Ashesi University</p>
          <p>• Bachelor of Computer Science</p>
        </div>

        <div className="skills">
          <h3>SKILLS</h3>
          <p>• Solutions Architect</p>
          <p>• Comraderie</p>
          <p>• Communication</p>
          <p>• Teamwork</p>
        </div>
      </div>

      <div className="contact-info">
        <p>Email: brian.antwi@ashesi.edu.gh</p>
      </div>
    </div>
  );
};

export default Brian;
