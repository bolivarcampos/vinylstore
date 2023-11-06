import { createContext, useState, useEffect } from "react";
// import axios from "axios";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // axios("data.json").then((res) => setData(res.data));

    let productsColletion = collection(db, "products");
    getDocs(productsColletion).then((res) => {
      let newArray = res.docs.map((product) => {
        return setData([...data, { id: product.id, ...product.data() }]);
      });
      setItems(newArray);
    });
  });

  const buyProducts = (products) => {
    const productRepeat = cart.find((item) => item.id === products.id);

    if (productRepeat) {
      setCart(
        cart.map((item) =>
          item.id === products.id
            ? { ...products, quanty: productRepeat.quanty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, products]);
    }
  };

  return (
    <dataContext.Provider value={{ data, cart, items, setCart, buyProducts }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
