import React, { useState, useEffect } from 'react';


function Favorites(){
    
    // useState hook for managing state
  const [count, setCount] = useState(0);

  // useEffect hook for managing side effects (e.g., data fetching)
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Dependency array: re-run effect when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Favorites;




