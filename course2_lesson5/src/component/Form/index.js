import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    setInput("");
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
