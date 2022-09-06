import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";

const Filters = () => {
  const [rate, setRate] = useState(3);

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
          />
        </div>
        <div>
          <Form.Check
            inline
            label="Decrescente"
            name="group1"
            type="radio"
            id={`inline-2`}
          />
        </div>
        <div>
          <Form.Check
            inline
            label="Esgotado"
            name="group1"
            type="checkbox"
            id={`inline-3`}
          />
        </div>
        <div>
          <Form.Check
            inline
            label="Rápida Entrega"
            name="group1"
            type="checkbox"
            id={`inline-4`}
          />
        </div>
      </Form>
      <div>
        <label style={{ paddingRight: 10 }}>Estrelas: </label>
        <Rating
          rating={rate}
          onClick={(i) => setRate(i + 1)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <Button variant="primary">Limpar Filtros</Button>
    </div>
  );
};

export default Filters;
