// mostly code from reactjs.org/docs/error-boundaries.html

import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    redirect: false,
  };

  // Gets called whenever error in the class
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(`ErrorBoundary caught an error`, error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
        // Instead of Redirecting via render method, could also just do
        // navigate("/")
      }, 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
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
