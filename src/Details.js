import React from "react";
import Carousel from "./Carousel";
import pet from "@frontendmasters/pet";
import { navigate } from '@reach/router';
import Modal from './Modal';
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

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
  state = { loading: true, showModal: false };

  // Runs once on first init
  componentDidMount() {
    // arrow functions do not create new contexts and so 'this' is accessible
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        url: animal.url,
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

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  adopt = () => navigate(this.state.url)
  // All class components MUST have a render method.
  // The render method will work much like regular function components.
  render() {
    if (this.state.loading) {
      return <h1>loading ...</h1>;
    }

    const { name, animal, breed, location, description, media, showModal } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {(themeHook) => (
              // themeHook[0] is theme, themeHook[1] is setTheme
              <button style={{ backgroundColor: themeHook[0] }} onClick={this.toggleModal}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {
            showModal ? (
              <Modal>
                <div>
                  <h1>Would you like to adopt {name}?</h1>
                  <div className="buttons">
                    <button onClick={this.adopt}>Yes</button>
                    <button onClick={this.toggleModal}>No, I'm a monster</button>
                  </div>
                </div>
              </Modal>
            ) : null
          }
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      {/* if did not spread and went props={props}, then inside Details, would be this.props.props */}
      <Details {...props} />
    </ErrorBoundary>
  );
}
