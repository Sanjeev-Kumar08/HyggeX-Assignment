import React from 'react';

const GradientText = ({ children }) => {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(180deg, #06286E 8%, #164EC0 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <h1 className="text-4xl font-bold" style={gradientStyle}>
      {children}
    </h1>
  );
};

export default GradientText;
