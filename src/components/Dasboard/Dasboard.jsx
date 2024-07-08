import React, { useState } from "react";
import "./Dasboard.css";
// import Nav from "../Nav/Nav";
import Nav from "../nav/nav"
import Output from "../output/output";
import Input from "../input/input";

export default function Dashoard() {
  const [input,setInputValue]=useState("");

  function callInput(getValue) {
    setInputValue(getValue);
    // console.log(input);
  }
  return (
    <>
      <Nav />
      <Output input={input}/>
      <Input callInput={callInput} />
    </>
  );
}