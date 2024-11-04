import React from 'react';
import DavidImage from '../assets/img/David.jpeg';


const David = () => {
  return (
    <div className="container david-page">
      <style>
        {`
          .david-page {
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
            height: 300px;
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
        <img src={DavidImage} alt="Profile" className="profile-image" />
        <h2>David Dela Nuworkpor</h2>
        <h3>About Me</h3>
        <p>
        I am a very motivated and results-driven BSc Computer Science student at Ashesi University, passionate about leveraging technology to solve complex problems. Throughout my academic journey, I've achieved recognition on the Dean's List and gained practical experience through internships at PricewaterhouseCoopers and Databank Financial Services. These opportunities allowed me to sharpen my skills in Python, Java, C#, and Power BI. I thrive in dynamic environments and am eager to contribute to innovative projects that drive meaningful impact. With a strong foundation in programming, data analysis, and leadership, I am excited to bring my unique perspective and dedication to excellence to new challenges.
        </p>
      </div>

      <h2 className="section-title">MY PROFILE</h2>

      <div className="details-section">
        <div className="education">
          <h3>EDUCATION</h3>
          <p>Ghana Christian International High School</p>
          <p>• Business Administration</p>
          <p>Ashesi University</p>
          <p>• Bachelor of Computer Science</p>
        </div>

        <div className="skills">
          <h3>SKILLS</h3>
          <p>• Innovator</p>
          <p>• Entrepreneur</p>
          <p>• Team player</p>
          <p>• Hardworking</p>
        </div>
      </div>

      <div className="contact-info">
        <p>Email: david.nuworkpor@ashesi.edu.gh</p>
      </div>
    </div>
  );
};

export default David;
