import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

// App is composite component i.e. custom made
const App = () => {
  // createElement(tag, element attributes, child elements)
  return React.createElement("div", { id: "app-test-id" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Alfie", animal: "Dog", breed: "Poodle" }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
