import React from "react";
import { useState } from "react";
import "./Joke.css";

const Joke = () => {
  const [Joke, setJoke] = useState("");

  const fetchJoke = async () => {
    const response = await fetch(
      "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch the joke");
    }
    const data = await response.json();
    setJoke(data.joke);
  };

  return (
    <div>
      <button onClick={fetchJoke}>Click to generate a joke</button>
      <p>{Joke}</p>
    </div>
  );
};

export default Joke;
