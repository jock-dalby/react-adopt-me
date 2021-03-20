import React from "react";

export default function Pet({ name, animal, breed }) {
  // To create markup this way requires us to visualise the HTML
  // we want, and then write it in Javascript. JSX allows us to
  // write the markup directly into the JS file (as below).
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, name),
  //   React.createElement("h2", {}, animal),
  //   React.createElement("h2", {}, breed),
  // ]);
  return (
    // When below jsx runs through Babel, it gets transpiled into
    // React.createElement calls (as above), it is just easier and
    // more readable to write markup in HTML-like syntax. This means
    // that wherever you have JSX code, you have to have React in
    // scope.
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
