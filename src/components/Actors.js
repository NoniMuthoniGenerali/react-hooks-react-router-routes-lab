import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => {
        return (
          <div key={index}>
            <h2>{actor.name}</h2>
            <p>Movies:</p>
            <ul>
              {actor.movies.map((movie) => {
                return <li key={movie}>{movie}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Actors;