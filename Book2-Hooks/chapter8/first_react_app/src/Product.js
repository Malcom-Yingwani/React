import Card from "react-bootstrap/Card";
import Rating from "./Ratings";

function Product(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.data.imageUrl} />
        <Card.Body>
          <Card.Title>{props.data.productName}</Card.Title>
          {props.data.releasedDate}
          <Rating
            rating={props.data.rating}
            numOfReviews={props.data.numOfReviews}
          />
          <p>Number of reviews: {props.data.numOfReviews}</p>
          <Card.Text>{props.data.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
