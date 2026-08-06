import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // send to something
    console.error("ErrorBoundary caught some error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh Oh!</h2>
          <p>
            there was an error with this page. <Link to="/">Click Here</Link> To
            go back to the home page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.getDerivedStateFromError();

export default ErrorBoundary;
