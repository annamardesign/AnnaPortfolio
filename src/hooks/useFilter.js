import { useState, useEffect } from "react";

export default function useFilter(currentState) {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    currentState === null ? setCategory("All") : setCategory(currentState);
  });
  console.log("state is ** " + category);
  return category;
}
