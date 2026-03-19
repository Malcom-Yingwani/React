import { useState } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

function Rating(props) {
  const [rating, setRating] = useState(props.rating);

  const handleClick = (ratingValue) => {
    setRating(ratingValue);
  };

  return (
    <div>
      <h1>Rating: {rating}</h1>

      {rating >= 1 ? (
        <IoIosStar onClick={() => handleClick(1)} />
      ) : (
        <IoIosStarOutline onClick={() => handleClick(1)} />
      )}

      {rating >= 2 ? (
        <IoIosStar onClick={() => handleClick(2)} />
      ) : (
        <IoIosStarOutline onClick={() => handleClick(2)} />
      )}

      {rating >= 3 ? (
        <IoIosStar onClick={() => handleClick(3)} />
      ) : (
        <IoIosStarOutline onClick={() => handleClick(3)} />
      )}

      {rating >= 4 ? (
        <IoIosStar onClick={() => handleClick(4)} />
      ) : (
        <IoIosStarOutline onClick={() => handleClick(4)} />
      )}

      {rating >= 5 ? (
        <IoIosStar onClick={() => handleClick(5)} />
      ) : (
        <IoIosStarOutline onClick={() => handleClick(5)} />
      )}
    </div>
  );
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
