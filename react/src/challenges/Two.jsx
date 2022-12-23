import React from "react";

const Item = ({ text }) => {
  return <p data-testid="two-item">{text}</p>;
};

// Slutför Two så att den skriver ut
// alla items som ges via props till Two.
// Använd komponenten Item för att skriva ut det
// i items.map nedan.

const Two = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} text={item} />
      ))}
    </div>
  );
};

export default Two;
