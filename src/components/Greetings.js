import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedtext, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {!changedtext && <Output>It's good to see you!</Output>}
      {changedtext && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
