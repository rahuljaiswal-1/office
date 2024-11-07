import React from 'react';
const LetterByLetter = ({ text, className }) => {
  return (
    <>
    <span className={className}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          style={{ animationDelay: `${index * 0.05}s` }} // Adjust delay for timing
          className="animate-letter"
        >
          {letter}
        </span>
      ))}
    </span>
    </>
  );
};

export default LetterByLetter;
