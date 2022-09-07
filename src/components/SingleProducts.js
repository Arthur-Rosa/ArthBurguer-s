import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProducts = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        {console.log(prod.image)}

          <Card.Img
            variant="top"
            src={`../img/${prod.image}.png`}
            alt={prod.name}
          ></Card.Img>
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>R$ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Rápida Entrega</div>
            ) : (
              <div>7 Dias a Entrega</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod
              })
            }} variant="danger">
              <FaTrash color="white" fontSize="25px" />
            </Button>
          ) : (
            <Button onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: prod
              })
            }} disabled={!prod.inStock} variant="success">
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
