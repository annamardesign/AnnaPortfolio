import { useState } from "react";

 function useFilter (currentState) {
    const [category, setCategory] = useState(null);
    currentState === null ? setCategory("All") : setCategory(currentState);
    return category;
}
export default useFilter;

 

