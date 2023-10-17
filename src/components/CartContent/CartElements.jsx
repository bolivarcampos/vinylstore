import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartItemCounter from "./CartItemCounter";

import "./CartContent.css";

const CartElements = () => {
  const { cart, setCart } = useContext(dataContext);

  const deleteProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== foundId;
    });

    setCart(newCart);
  };

  return cart.map((product) => {
    return (
      <div className="cartContent" key={product.id}>
        <img src={product.img} alt="product-cards" />
        <h3 className="name"> {product.Banda}</h3>
        <h3 className="name"> {product.Album}</h3>
        <CartItemCounter product={product} />
        <h4 className="Price">{product.Price * product.quanty}$</h4>
        <h3
          className="cart-delete-button"
          onClick={() => deleteProduct(product.id)}
        >
          ❌
        </h3>
      </div>
    );
  });
};

export default CartElements;
