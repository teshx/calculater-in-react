import React from "react";
import { useState } from "react";

function Main() {
  const [inputValue, setinputValue] = useState("");
  return (
    <>
      <form name="calc" className="calculater">
        <input type="txt" className="value" value={inputValue}></input>
        <span className="num clear">C</span>
        <span>/</span>
        <span>*</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>-</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span className="plus">+</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>0</span>
        <span>00</span>
        <span>.</span>
        <span className="equal">=</span>
      </form>
    </>
  );
}

export default Main;
