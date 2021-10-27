import React, { useState } from "react";
import Button from "./Button";
import Stars from "./Stars";

function Counter() {
  const [count, setCount] = useState(0);
  const [starsArray, setStars] = useState([]);

  function add1() {
    setCount(count + 1);
    let ourStars = starsArray;
    if (count >= 0) {
      ourStars.push(<Stars key={count} />);
      setStars(ourStars);
    }
  }

  function sub1() {
    setCount(count - 1);
    let ourStars = starsArray;
    if (count > 0) {
      ourStars.pop();
      setStars(ourStars);
    }
  }

  return (
    <div>
      <Button onClick={() => add1()} label="Addition-Button" />
      <div>{count}</div>
      <Button onClick={() => sub1()} label="Subtract-Button" />
      <div>Stars can appear below</div>
      <div>{starsArray}</div>
    </div>
  );
}

export default Counter;
