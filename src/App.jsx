import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Singar from "./Singar";
import Actors from "./Actors";

function App() {
  const actors = [
    { id: 1, name: "Arfin Shuvo", age: 28 },
    { id: 2, name: "Shakib Khan", age: 38 },
    { id: 3, name: "Salman khan", age: 40 },
  ];

  const singars = ["Minar Rahman", "Mahfuzur Rahman", "Eva sorkar"];

  return (
    <>
      <h1>Vite + React</h1>
      {actors.map((actor) => (
        <Actors name={actor}></Actors>
      ))}

      <Singar name="Minar Rahman "></Singar>
      {singars.map((finger) => (
        <Singar name={finger}></Singar>
      ))}
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Person></Person>
      <Student grade="12" score="98"></Student>
      <Student></Student>
      <Developer></Developer>
      <Programmer></Programmer> */}
    </>
  );
}

function Person() {
  const age = 25;
  const person = { name: "Firoz", age: 21 };
  return (
    <h3>
      I am {person.name} with age: {age}
    </h3>
  );
}

function Student({ grade = "9", score = "837" }) {
  const name = "Firoz Al Hasan";
  const age = 21;

  return (
    <div className="student">
      <h3>This is a student.</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Developer() {
  const skills = ["React", "NodeJs"];
  return (
    <ul>
      {skills?.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}

function Programmer() {
  const pro = {
    border: "2px solid skyblue",
    color: "tomato",
    borderRedius: "10px",
  };
  return (
    <div style={pro}>
      <h2>I am a Programmer</h2>
      <button
        onClick={() => {
          alert("Hello");
        }}
      >
        Click Me!
      </button>
    </div>
  );
}

export default App;
