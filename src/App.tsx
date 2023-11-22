import { useState } from "react";
import { Button } from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => {setCount(prevCount => prevCount + 1)}}>Test</Button>
      <p>{count}</p>
    </>
  );
}

export default App;
