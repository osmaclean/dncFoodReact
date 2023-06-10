import Header from "../../components/Header";
import Card from "../../components/Card";
import { PRODUCTS_MOCK } from "../../api/products.mock.js";
import "./index.scss";
import { useState } from "react";

export default function Home() {
  const [products] = useState(PRODUCTS_MOCK);

  return (
    <div className="Home">
      <Header />
      <div className="Home__products">
        {products.map((product) => (
          <Card data={product} key={product.id}></Card>
        ))}
      </div>
    </div>
  );
}
