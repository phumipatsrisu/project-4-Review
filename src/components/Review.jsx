import React, { useState } from "react";
import reviews from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];
  //   console.log(name, job, image, text);

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    // console.log(randomNumber);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="w-full max-w-sm p-8 mx-auto rounded-lg shadow-xl text-center">
      <div className="relative w-36 h-36 mx-auto mb-4">
        <img
          className=" w-full h-full rounded-full object-cover shadow-md"
          src={image}
          alt="Review author"
        />
        <span className="absolute top-0 right-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="text-xl font-semibold">{name}</h4>
      <p className="text-sm text-blue-600 uppercase m-1">{job}</p>
      <p className="text-sm m-1">{text}</p>
      <div>
        <button
          className="text-blue-400 mt-2 mr-2 hover:bg-blue-100"
          onClick={nextPerson}
        >
          <FaChevronLeft />
        </button>
        <button
          className="text-blue-400 mt-2 hover:bg-blue-100"
          onClick={prevPerson}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="text-blue-400 mt-2 bg-blue-100 rounded-2xl hover:bg-blue-200"
        onClick={randomPerson}
      >
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
