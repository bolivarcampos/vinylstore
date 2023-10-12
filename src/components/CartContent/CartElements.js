import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./CartContent.css";

const CartElements = () => {
  const { cart } = useContext(dataContext);

  return cart.map((product) => {
    return (
      <div className="cartContent" key={product.id}>
        <img src={product.img} alt="product-cards" />
        <h3 className="name"> {product.Banda}</h3>
        <h3 className="name"> {product.Album}</h3>
        <h4 className="Price">{product.Price}$</h4>
      </div>
    );
  });
};

export default CartElements;
