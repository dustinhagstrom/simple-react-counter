import React, { useState } from "react";

function Button(props) {
  const { label, onClick } = props;

  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  );
}

export default Button;
