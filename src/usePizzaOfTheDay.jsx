import { useState, useEffect, useDebugValue } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaofTheDay, setPizzaOfTheDay] = useState(null);
  useDebugValue(
    pizzaofTheDay
      ? `${pizzaofTheDay.id} : ${pizzaofTheDay.name}`
      : "loading ...",
  );

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    }
    fetchPizzaOfTheDay();
  }, []);

  return pizzaofTheDay;
};
