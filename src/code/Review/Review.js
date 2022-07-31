import React, { useState } from "react";
import people from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
function Review() {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  const prevPerson = () => {
    let newNumber = index - 1;
    setIndex(checkNumber(newNumber));
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let newNumber = Math.floor(Math.random() * people.length);
    if (newNumber === index) {
      newNumber = index + 1;
    }
    setIndex(checkNumber(newNumber));
  };
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  return (
    <main>
      <section>
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
        <article>
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div>
            <button onClick={prevPerson} className="prev-btn">
              <FaChevronLeft />
            </button>
            <button onClick={nextPerson} className="next-btn">
              <FaChevronRight />
            </button>
          </div>
          <button className="random-btn" onClick={randomPerson}>
            surprise me
          </button>
        </article>
      </section>
    </main>
  );
}

export default Review;
