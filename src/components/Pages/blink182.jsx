import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Blink182 = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <h1>Vinilos de Blink182 </h1>

      <div className="product-container">
        <Products />
      </div>
    </>
  );
};

export default Blink182;
