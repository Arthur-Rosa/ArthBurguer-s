import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";

// Horas = 01:01:00

// import faker from "faker";
const Cart = createContext();

const Context = ({ children }) => {
  /* const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));
 */
  const products = [
    {
      id: 1,
      name: "Big Burguer",
      price: "77.00",
      image: "img11",
      inStock: 3,
      fastDelivery: true,
      ratings: 2,
    },
    {
      id: 2,
      name: "Ultra Big Burguer",
      price: "22.00",
      image: "img22",
      inStock: 12,
      fastDelivery: true,
      ratings: 4,
    },
    {
      id: 3,
      name: "Best Burguer",
      price: "105.00",
      image: "img33",
      inStock: 10,
      fastDelivery: true,
      ratings: 5,
    },
    {
      id: 4,
      name: "Mac Burguer",
      price: "35.00",
      image: "img44",
      inStock: 0,
      fastDelivery: true,
      ratings: 3,
    },
  ];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
