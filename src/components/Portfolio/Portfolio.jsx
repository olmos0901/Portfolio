import React from "react";
import Container from "../../layout/Container";
import classes from "./portfolio.module.css";
import qpcik from "../../assets/qpick.jpg";
import qpick_te from "../../assets/qpick_te.png";
import bookshelter from "../../assets/bookshelter.png";
const Portfolio = () => {
  return (
    <Container>
      <p className={classes["project"]} data-aos="fade-up" id="portfolio">
        My projects
      </p>
      <h2 className={classes["portfolio"]} data-aos="fade-down">
        Portfolio
      </h2>
      <div className={classes["portfolio__proekts"]}>
        <div className={classes["portfolio__proekts__item"]}>
          <div
            className={classes["portfolio__proekts-img-florist"]}
            data-aos="flip-right"
          >
            <img src={bookshelter} alt="bookshelter" />
          </div>
          <div className={classes["portfolio__proekts-info"]}>
            <h2
              className={classes["portfolio__proekts-info__title"]}
              data-aos="fade-up"
            >
              BookShelter online kutubxona
              {/* <strong>
                  USERNAME: eve.holt@reqres.in
                  PASSWORD: cityslicka
                </strong> */}
            </h2>
            <p
              className={classes["portfolio__proekts-info__text"]}
              data-aos="zoom-in"
            >
              This is an online kutubxona, you can find the books you need on. I
              create a website using HTML, CSS, JS CSS,JavaScript, React. This
              is a tablet friendly website!
            </p>
            <div data-aos="fade-up">
              <a
                href="https://bookkshelter-4-117.netlify.app/"
                className={classes["portfolio__proekts-info__link"]}
              >
                Viev Page
              </a>
            </div>
          </div>
        </div>
        <div className={classes["portfolio__proekts__item"]}>
          <div
            className={classes["portfolio__proekts-img"]}
            data-aos="flip-left"
          >
            <img src={qpcik} alt="qpick" />
            <img src={qpick_te} alt="qpick" />
          </div>
          <div className={classes["portfolio__proekts-info"]}>
            <h2
              className={classes["portfolio__proekts-info__title"]}
              data-aos="fade-up"
            >
              QPICK
            </h2>
            <p
              className={classes["portfolio__proekts-info__text"]}
              data-aos="zoom-in"
            >
              This is an online store. You can find what you need. This site is
              built on React.js and Redux and uses the API. There are errors on
              the site, I apologize in advance!
            </p>
            <div data-aos="fade-up">
              <a
                href="https://5-imtihon.netlify.app/"
                className={classes["portfolio__proekts-info__link"]}
              >
                Viev Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
