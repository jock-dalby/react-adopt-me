const Pet = ({ name, animal, breed}) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ])
}

// App is composite component i.e. custom made
const App = () => {
  // createElement(tag, element attributes, child elements)
  return React.createElement("div", { id: 'app-test-id'}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: 'Alfie', animal: 'Dog', breed: 'Poodle'}),
    React.createElement(Pet, { name: 'Pepper', animal: 'Bird', breed: 'Cockatiel'}),
    React.createElement(Pet, { name: 'Doink', animal: 'Cat', breed: 'Mixed'}),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));