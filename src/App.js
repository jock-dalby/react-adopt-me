import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    // StrictMode can be shipped to production. Does not render anything or
    // increase bundle size. It will just give warnings if use any unstable
    // or deprecated React apis. Helpful if working in legacy applications
    // that do not use latest features.
    <React.StrictMode>
      <div id="app-test-id">
        <h1>Adopt Me!</h1>
        <Router>
          {/* 
              React Router will render all components with paths that match.
              React Router will only render 1 component, the one with the path that matches the most.
              Order of components below does not matter.
          */}
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
