import React from "react";

const Item = (props) => {
  const { number } = props;

  // Don't touch this
  if (typeof number !== "number") {
    return <p data-testid="three-faulty-item">Inte ett nummer</p>;
  }

  return <p data-testid="three-item">{number}</p>;
};

// Slutför Three så att den skriver ut
// de items den får genom props i en lista av Items.
// Men se till att den filtrerar ut de som inte är nummer.
// Item ska alltså inte skriva ut "Inte ett nummer"

const Three = () => {
  const numericItems = [1, 2, 3, 4, 5];

  return (
    <div>
      {numericItems.map((item) => (
        <Item key={item} number={item} />
      ))}
    </div>
  );
};

export default Three;
