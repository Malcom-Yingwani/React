import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

class JumboTronComponent extends Component {
  render() {
    return (
      <div>
        <Container fluid className="p-5 mb-4 bg-light rounded-3">
          <h1>Hello, world!</h1>
          <p>
            {/* Hardcoding JumboTron */}
            {/* This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information. */}

            {/* Hardcoded data passed in from the outside */}
            {/* {this.props.body} */}

            {/* Dynamic insertion of content */}
            {this.props.children}
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Container>
      </div>
    );
  }
}

export default JumboTronComponent;
