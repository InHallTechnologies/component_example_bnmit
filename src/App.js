import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import HComponent from "./HComponent";
import InputComponent from "./InputComponent";

function App() {
  const [userInput, setUserInput] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <HComponent toggle={toggle} userInput={userInput} />
      <InputComponent userInput={userInput} setUserInput={setUserInput} setToggle={setToggle} />
      <ButtonComponent setToggle={setToggle} />
    </div>
  );
}

export default App;
