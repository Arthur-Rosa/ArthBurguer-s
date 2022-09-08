import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Filters = () => {
  const {
    productState: { byStock, byFastDelivery, sort, byRating },
    productDispatch,
  } = CartState();

  return (
    <div className="filters">
      <div className="title">Filtro dos Burguer</div>

      <Form>
        <div>
          <Form.Check
            inline
            label="Crescente"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={() => {
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              });
            }}
            checked={sort === "lowToHigh" ? true : false}
          />
        </div>
        <div>
          <Form.Check
            inline
            label="Decrescente"
            name="group1"
            type="radio"
            id={`inline-2`}
            onChange={() => {
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
              });
            }}
            checked={sort === "highToLow" ? true : false}
          />
        </div>
        <div>
          <Form.Check
            inline
            label="Esgotado"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            onChange={() => {
              productDispatch({
                type: "FILTER_BY_STOCK",
              });
            }}
            checked={byStock}
          />
        </div>
        <div>
          <Form.Check
            inline
            label="Rápida Entrega"
            name="group1"
            type="checkbox"
            id={`inline-4`}
            onChange={() => {
              productDispatch({
                type: "FILTER_BY_DELIVERY",
              });
            }}
            checked={byFastDelivery}
          />
        </div>
      </Form>
      <div>
        <label style={{ paddingRight: 10 }}>Estrelas: </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </div>
      <Button
        variant="primary"
        onClick={(i) =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Limpar Filtros
      </Button>
    </div>
  );
};

export default Filters;
