import React, { useState } from "react";

const SearchParams = () => {
  // useState is a hook. All hooks handle stateful logic and
  // are prefixed with 'use'.
  // Hooks should NEVER go inside of 'if' statements, or 'for' loops etc.
  // Hooks keep track of the order in which they are created, which would
  // be inconsistent with conditionals/unpredictable logic. "react-hooks" has
  // been added to eslint config to error against this behaviour.
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
