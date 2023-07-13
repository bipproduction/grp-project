import React, { useState } from "react";
const App = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const handleChange1 = (e) => {
    setValue1(e.target.value);
  };
  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`The product of ${value1} + ${value2} is ${value1 + value2}`);
  };
  return (
    <div>
      <input
        type="number"
        value={value1}
        onChange={handleChange1}
      />
      <input
        type="number"
        value={value2}
        onChange={handleChange2}
      />
      <button onClick={handleSubmit}>Multiply</button>
    </div>
  );
};
export default App;