import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > 3) newIndex = 1;
      if (newIndex < 1) newIndex = 3;
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  useEffect(() => {
    const showSlides = () => {
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    };

    showSlides();
  }, [slideIndex]);

  return (
    <div>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img
            src="img_nature_wide.jpg"
            style={{ width: "100%" }}
            alt="Nature"
          />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="img_snow_wide.jpg" style={{ width: "100%" }} alt="Snow" />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img
            src="img_mountains_wide.jpg"
            style={{ width: "100%" }}
            alt="Mountains"
          />
          <div className="text">Caption Three</div>
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>
      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default Slideshow;
