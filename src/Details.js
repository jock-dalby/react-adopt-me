import React from "react";
import Carousel from "./Carousel";
import pet from "@frontendmasters/pet";

// props is information you get handed down from parent class/component.
// state is self-contained within the class and can be mutated.

// regular js component
class Details extends React.Component {
  // Old way of defining initial state
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     loading: true,
  //   };
  // }

  // Can now define initial state as below
  state = { loading: true };

  // Runs once on first init
  componentDidMount() {
    // arrow functions do not create new contexts and so 'this' is accessible
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }
  // All class components MUST have a render method.
  // The render method will work much like regular function components.
  render() {
    if (this.state.loading) {
      return <h1>loading ...</h1>;
    }

    const { name, animal, breed, location, description, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
