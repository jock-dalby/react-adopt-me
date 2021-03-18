const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Alfie"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Poodle")
  ])
}

// App is composite component i.e. custom made
const App = () => {
  // createElement(tag, element attributes, child elements)
  return React.createElement("div", { id: 'app-test-id'}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));