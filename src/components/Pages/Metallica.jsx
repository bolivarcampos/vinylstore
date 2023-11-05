import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Metallica = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <h1>Vinilos de Metallica </h1>

      <div className="product-container">
        <Products />
      </div>
    </>
  );
};

export default Metallica;
