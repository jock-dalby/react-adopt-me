import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div id="app-test-id">
      <h1>Adopt Me!</h1>
      <Pet name="Alfie" animal="Dog" breed="Poodle" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
