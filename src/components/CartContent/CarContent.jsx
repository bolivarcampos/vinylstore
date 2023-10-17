import { useContext } from "react";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import { dataContext } from "../Context/DataContext";
import Navbar from "../NavBar/NavBar";

const CarContent = () => {
  const { cart } = useContext(dataContext);

  return (
    <>
      <Navbar />
      {cart.length > 0 ? (
        <>
          <CartElements />
          <CartTotal />
        </>
      ) : (
        <h2 className="cart-message-center">Tu Carrito está Vacío</h2>
      )}
    </>
  );
};

export default CarContent;
