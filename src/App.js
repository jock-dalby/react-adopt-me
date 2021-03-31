import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  // themeHook is array [initialState, updaterFunc]
  const themeHook = useState('blue')
  return (
    // StrictMode can be shipped to production. Does not render anything or
    // increase bundle size. It will just give warnings if use any unstable
    // or deprecated React apis. Helpful if working in legacy applications
    // that do not use latest features.
    <React.StrictMode>
      {/* now everything in global app state has access to themeHook */}
      <ThemeContext.Provider value={themeHook}>
        <div id="app-test-id">
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
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
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
