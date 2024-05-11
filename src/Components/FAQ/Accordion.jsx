import React, { useState } from "react";
import FAQDown from '../../assets/FAQDown.svg'

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-blue-400 rounded-xl p-4 mb-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <img
          src={FAQDown}
          className={`h-4 w-4 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          alt="Toggle Icon"
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'h-auto' : 'h-0'
        }`}
      >
        <div className="font-medium text-lg text-gray-600 mt-1">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
