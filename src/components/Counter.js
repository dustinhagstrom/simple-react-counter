import React, { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {}, [count]);

  function add1() {
    setCount(count + 1);
  }

  function sub1() {
    setCount(count - 1);
  }

  return (
    <div>
      <Button onClick={() => add1()} label="Addition-Button" />
      <div>{count}</div>
      <Button onClick={() => sub1()} label="Subtract-Button" />
    </div>
  );
}

export default Counter;
