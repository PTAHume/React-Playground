import * as React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
//const {useState} = require("react");
const rootElement = document.getElementById('root');
const root = createRoot(rootElement || new Element());

function Button(props: any) {
  const handelClick = () => {
    props.onClickFunction(props.increment);
  };
  return <button onClick={handelClick}>+{props.increment}</button>;
}

function Display(props: any) {
  return <div>{props.message}</div>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue: number) => {
    setCounter(counter + incrementValue);
  };
  return (
    <>
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter} increment={2} />
      <Button onClickFunction={incrementCounter} increment={5} />
      <Display message={counter} />
    </>
  );
}

export default App;