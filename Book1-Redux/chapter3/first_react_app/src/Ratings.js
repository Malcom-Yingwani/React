import { Component } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = { rating: this.props.rating };
  }
  handleClick(ratingValue) {
    this.setState({ rating: ratingValue });
  }
  render() {
    return (
      <div>
        {/* Example 1: Passing Data using props object */}

        <h1>Rating: {this.state.rating}</h1>
        {/* {this.props.rating >= 1 ? <IoIosStar /> : <IoIosStarOutline />}
        {this.props.rating >= 2 ? <IoIosStar /> : <IoIosStarOutline />}
        {this.props.rating >= 3 ? <IoIosStar /> : <IoIosStarOutline />}
        {this.props.rating >= 4 ? <IoIosStar /> : <IoIosStarOutline />}
        {this.props.rating >= 5 ? <IoIosStar /> : <IoIosStarOutline />} */}

        {/* Example 2: Passing Data using local state */}
        {this.state.rating >= 1 ? (
          <IoIosStar onClick={this.handleClick.bind(this, 1)} />
        ) : (
          <IoIosStarOutline onClick={this.handleClick.bind(this, 1)} />
        )}
        {this.state.rating >= 2 ? (
          <IoIosStar onClick={this.handleClick.bind(this, 2)} />
        ) : (
          <IoIosStarOutline onClick={this.handleClick.bind(this, 2)} />
        )}
        {this.state.rating >= 3 ? (
          <IoIosStar onClick={this.handleClick.bind(this, 3)} />
        ) : (
          <IoIosStarOutline onClick={this.handleClick.bind(this, 3)} />
        )}
        {this.state.rating >= 4 ? (
          <IoIosStar onClick={this.handleClick.bind(this, 4)} />
        ) : (
          <IoIosStarOutline onClick={this.handleClick.bind(this, 4)} />
        )}
        {this.state.rating >= 5 ? (
          <IoIosStar onClick={this.handleClick.bind(this, 5)} />
        ) : (
          <IoIosStarOutline onClick={this.handleClick.bind(this, 5)} />
        )}
      </div>
    );
  }
}

export default Rating;

/*
Purpose:
A React class component that displays a 5-star rating system.

Core Functionality:
- Initializes rating state using a value passed through props.
- Clicking a star updates the rating using setState().
- Filled or outlined star icons are displayed depending on the current rating.

Output:
Renders an interactive 5-star rating where users can click stars to change the rating.
*/
