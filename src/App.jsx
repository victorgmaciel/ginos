import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Ginos - Order Now</h1>
      <Pizza
        name="Pepperoni"
        description="pep, cheese, n stuff"
        img={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Hawaiian"
        description="ham, pineapple, n stuff"
        img={"/public/pizzas/hawaiian.webp"}
      />
      <Pizza
        name="Calabrese"
        description="idk, whatever a Calabrese has ya dig?"
        img={"/public/pizzas/calabrese.webp"}
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
