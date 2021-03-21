import React, { useState } from "react";
// @frontendmasters was not in package.json but Parcel is smart
// enough to recognise that and go and grab from npm registry.
// When this is saved, Parcel will install and add to
// dependencies list.
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  // useState is a hook. All hooks handle stateful logic and
  // are prefixed with 'use'.
  // Hooks should NEVER go inside of 'if' statements, or 'for' loops etc.
  // Hooks keep track of the order in which they are created, which would
  // be inconsistent with conditionals/unpredictable logic. "react-hooks" has
  // been added to eslint config to error against this behaviour.
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, AnimalDropdown] = useDropdown("Animal", "Dog", ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

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
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
