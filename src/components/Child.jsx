import React from "react";

function Child({ onClick }) {
  console.log("Child rendered");
  return (
    <button onClick={onClick}>Click Child</button>
  );
}

export default React.memo(Child);
