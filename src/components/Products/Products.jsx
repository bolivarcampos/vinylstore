import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css";

const Products = () => {
  const { data, buyProducts } = useContext(dataContext);

  return data.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img src={product.img} alt="img" className="img-cover" />
        <h3>{product.Album}</h3>
        <h3>{product.Banda}</h3>
        <h4>{product.Price}$</h4>
        <button onClick={() => buyProducts(product)}>Comprar</button>
      </div>
    );
  });
};

export default Products;
