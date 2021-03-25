import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    activeIndex: 0,
  };

  // Special React method. Must be static.
  static getDerivedStateFromProps({ media }) {
    // Default image if no images found
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      // Array of url strings from large selection
      photos = media.map(({ large }) => large);
    }

    // This will be merged into state
    return { photos };
  }

  render() {
    const { photos, activeIndex } = this.state;
    return (
      <div className="carousel">
        <img src={photos[activeIndex]} alt="animal-pic" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === activeIndex ? "active" : ""}
              alt="animal-thumbnail-click"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
