import Header from "../../components/Header";
import "./index.scss";
import { PRODUCTS_MOCK } from "../../api/products.mock.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  let { id } = useParams();
  const [products] = useState(PRODUCTS_MOCK);
  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    let filteredProducts = products.filter((product) => {
      return product.id == id;
    });
    setProductsFiltered(filteredProducts);
  }, [id]);

  return (
    <div>
      <Header />

      <div className="productBox">
        {productsFiltered.map((product) => (
          <div className="productItem" key={product.id}>
            <img src={product.imgPath} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
