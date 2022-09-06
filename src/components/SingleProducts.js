import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProducts = ({ prod }) => {
  const {
    state: { cart },
    dispath,
  } = CartState();

  return (
    <div className="products">
      <Card>
        {console.log(prod.image)}

        <a href={`../img/${prod.image}.png`}>
          <Card.Img
            variant="top"
            src={`../img/${prod.image}.png`}
            alt={prod.name}
          ></Card.Img>
        </a>
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>{prod.price.split(",")[0]}</span>
            {prod.fastDelivery ? (
              <div>Rápida Entrega</div>
            ) : (
              <div>7 Dias a Entrega</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button variant="danger">
              <FaTrash color="white" fontSize="25px" />
            </Button>
          ) : (
            <Button disabled={!prod.inStock} variant="success">
              {!prod.inStock ? (
                "Acabou :("
              ) : (
                <FaShoppingCart color="white" fontSize="25px" />
              )}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProducts;
