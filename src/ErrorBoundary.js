// mostly code from reactjs.org/docs/error-boundaries.html

import React from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(`ErrorBoundary caught an error`, error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing{" "}
          <Link to="/">
            Click here to go back to the home page or wait five seconds.
          </Link>
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
