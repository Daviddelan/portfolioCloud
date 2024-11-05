import React from "react";
import StephImage from "../assets/img/steph.jpeg";

const Steph = () => {
	return (
		<div className="container steph-page">
			<style>
				{`
          .steph-page {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #fff;
            padding-top: 100px;
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

          .details-section .career, .details-section .achievements {
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
				<img
					src={StephImage}
					alt="Steph Curry"
					className="profile-image"
				/>
				<h2>Steph Curry</h2>
				<h3>About Me</h3>
				<p>
					Stephen "Steph" Curry is an American professional basketball
					player for the Golden State Warriors in the NBA. Known for
					his extraordinary shooting skills, he is widely regarded as
					one of the greatest shooters in NBA history. Curry has
					revolutionized the game with his long-range shooting
					ability, influencing players and teams to emphasize
					three-point shooting. Off the court, he is a philanthropist,
					entrepreneur, and family man who remains dedicated to making
					a positive impact both in sports and beyond.
				</p>
			</div>

			<h2 className="section-title">MY PROFILE</h2>

			<div className="details-section">
				<div className="career">
					<h3>CAREER</h3>
					<p>Golden State Warriors</p>
					<p>• 4-time NBA Champion</p>
					<p>• 2-time NBA MVP</p>
					<p>• 9-time NBA All-Star</p>
				</div>

				<div className="achievements">
					<h3>ACHIEVEMENTS</h3>
					<p>• NBA all-time leader in 3-pointers</p>
					<p>• Multiple All-NBA First Team honors</p>
					<p>
						• Impactful philanthropist and founder of the Eat.
						Learn. Play. Foundation
					</p>
				</div>
			</div>

			<div className="contact-info">
				<p>Email: steph.curry@example.com</p>
			</div>
		</div>
	);
};

export default Steph;
