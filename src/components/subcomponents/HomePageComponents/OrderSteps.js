import React from "react";

const OrderSteps = () => {
  const steps = [
    "choose pizza",
    "choose size pizza",
    "choose extra ingredients",
    "choose sauce",
    "order pizza",
  ];

  const stepsList = steps.map((step, id) => {
    return (
      <li key={step}>
        <span>{id + 1}</span>
        <p>{step}</p>
      </li>
    );
  });

  return (
    <section>
      <h2>order pizza online</h2>
      <ul>{stepsList}</ul>
      <button>check menu</button>
    </section>
  );
};

export default OrderSteps;
