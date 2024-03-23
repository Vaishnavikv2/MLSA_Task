/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/copm.jpg";

const imageAltText = "desktop laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "MachineLearningProjects🎉",
    description:
      "MachineLearningProjects This repository contains a collection of machine learning projects that I have been learning and working on. Each project focuses on various aspects of machine learning, including data preprocessing, feature engineering, model selection, and evaluation. 1 .Object Classification in the Ocean: This project aims to classify objects in the ocean as either rocks or mines using solar data. It involves applying various machine learning algorithms such as logistic regression.",
    url: "https://github.com/Vaishnavikv2/MachineLearningProjects",
  },
  {
    title: "Quiz_App",
    description:
      "This is a Quiz App using Java in Android Studio it will display the score at the end of your test",
    url: "https://vaishnavikv2.github.io/Quiz_App/",
  },
  {
    title: "Cross_Border_payments",
    description:
      "StreamlinePay is a cross-border payment solution built on Ethereum blockchain, designed to simplify and enhance the process of international transactions. It offers fast, secure, and transparent payments, reducing fees and improving accessibility.",
    url: "https://github.com/Vaishnavikv2/Cross_Border_Payments",
  },
  {
    title: "Python_ANPR",
    description:
      "Automatic number plate recognition used to detect the number plate using Easy OCR and OpenCV technology",
    url: "https://github.com/Vaishnavikv2/Python-ANPR",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
