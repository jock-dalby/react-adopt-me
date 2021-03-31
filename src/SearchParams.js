import React, { useState, useEffect, useContext } from "react";
// @frontendmasters was not in package.json but Parcel is smart
// enough to recognise that and go and grab from npm registry.
// When this is saved, Parcel will install and add to
// dependencies list.
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import ThemeContext from './ThemeContext';

const SearchParams = () => {
  // useState is a hook. All hooks handle stateful logic and
  // are prefixed with 'use'.
  // Hooks should NEVER go inside of 'if' statements, or 'for' loops etc.
  // Hooks keep track of the order in which they are created, which would
  // be inconsistent with conditionals/unpredictable logic. "react-hooks" has
  // been added to eslint config to error against this behaviour.
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme] = useContext(ThemeContext);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  // useEffect will run AFTER the component has RENDERED for the very first time.
  useEffect(
    () => {
      setBreeds([]);
      setBreed("");
      pet.breeds(animal).then(({ breeds }) => {
        const breedNames = breeds.map(({ name }) => name);
        setBreeds(breedNames);
      }, console.error);
    },
    // List of dependencies this hook depends on
    // setBreed and setBreeds will not change but eslint
    // should require them to be in dependencies as used
    // in the hook.
    // To set useEffect hook to run only once, can pass in []
    // as list of dependencies.
    [animal, setBreed, setBreeds]
  );

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
        {/* button is coloured blue by where themeHook is passed into to ThemeContext in App.js */}
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
