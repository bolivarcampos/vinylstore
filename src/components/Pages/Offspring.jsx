import NavBar from "../NavBar/NavBar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Offspring = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <h1>Vinilos de The Offspring </h1>

      <div className="product-container">
        <Products />
      </div>
    </>
  );
};

export default Offspring;
