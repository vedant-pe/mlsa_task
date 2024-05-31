/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/code-2434271_1280.jpg";

const imageAltText = "this simple code image";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Experienced data scientist proficient in statistical analysis, machine learning, and data visualization. Skilled in extracting insights from large datasets to drive informed decision-making and solve complex problems. Proficient programmer with expertise in multiple languages, including Python, Java, and SQL. Experienced in developing software applications, websites, and digital solutions.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web programmer",
  "data scientist",
  "programmer",
  "problme solver",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Strong problem-solving abilities and a keen eye for detail. Proven track record of delivering high-quality projects on time and within budget. Effective communicator and team player, able to collaborate across disciplines to achieve common goals. Continuously learning and adapting to new technologies and methodologies in both data science and programming. Passionate about leveraging data-driven approaches to drive business success and innovation. Seeking opportunities to contribute expertise in both data science and programming to impactful projects and teams.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
