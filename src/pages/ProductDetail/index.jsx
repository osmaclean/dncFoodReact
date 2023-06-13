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
          <div className="productBox__productItem" key={product.id}>
            <h1>Minha Sacola</h1>
            <div className="productBox__productItem__container">
              <div className="productBox__productItem__container__left">
                <div className="productBox__productItem__container__left__box">
                  <img src={product.imgPath} />
                  <h3>{product.title}</h3>
                </div>
                <p>{product.desc}</p>
              </div>
              <div className="productBox__productItem__container__right">
                <h3>{product.title}</h3>
                <div className="productBox__productItem__container__right__line"></div>
                <p>{product.price}</p>
                <div className="productBox__productItem__container__right__buttons">
                  <button className="continue">Continuar Comprando</button>
                  <button className="finish">Finalizar Compra</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
