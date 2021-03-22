import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    // StrictMode can be shipped to production. Does not render anything or
    // increase bundle size. It will just give warnings if use any unstable
    // or deprecated React apis. Helpful if working in legacy applications
    // that do not use latest features.
    <React.StrictMode>
      <div id="app-test-id">
        <h1>Adopt Me!</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
