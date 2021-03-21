import React, { useState } from "react";
// @frontendmasters was not in package.json but Parcel is smart
// enough to recognise that and go and grab from npm registry.
// When this is saved, Parcel will install and add to
// dependencies list.
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  // useState is a hook. All hooks handle stateful logic and
  // are prefixed with 'use'.
  // Hooks should NEVER go inside of 'if' statements, or 'for' loops etc.
  // Hooks keep track of the order in which they are created, which would
  // be inconsistent with conditionals/unpredictable logic. "react-hooks" has
  // been added to eslint config to error against this behaviour.
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("Dog");
  const [breed, setBreed] = useState({});
  const [breeds, setBreeds] = useState([]);

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
        <label htmlFor="animal">
          Animal
          {/* Screen readers may not call onChange event, so also need to include onBlur for
          accessibility.  */}
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map((a) => (
              <option value={a} key={a}>
                {a}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            disabled={!breeds.length}
          >
            <option>-- Not specified --</option>
            {breeds.map((b) => (
              <option value={b} key={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
