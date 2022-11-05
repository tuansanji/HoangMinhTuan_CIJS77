import { useState, useEffect } from "react";

function CountLength() {
  const [number, setNumber] = useState(0);
  const [word, setWork] = useState("");
  const handleOnChange = (e) => {
    setWork(e.target.value);
  };
  useEffect(() => {
    const id = setTimeout(() => {
      setNumber(word.length);
    }, 500);
    return () => clearTimeout(id);
  }, [word]);
  return (
    <div className="container">
      <input value={word} type="text" onChange={handleOnChange} />
      <p>Word(s): {number}</p>
    </div>
  );
}
export default CountLength;
