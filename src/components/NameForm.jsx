import React from "react";
import { useInput } from "./useInput";

export default function NameForm() {
  const firstName = useInput("");
  const lastName = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`هاي: ${firstName.value} ${lastName.value}`);
    firstName.reset();
    lastName.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name: </label>
        <input type="text" {...firstName} />
      </div>
      <div>
        <label>Last Name: </label>
        <input type="text" {...lastName} />
      </div>
      <button type="submit">Submit</button>
      <h3>
        Preview: {firstName.value} {lastName.value}
      </h3>
    </form>
  );
}
