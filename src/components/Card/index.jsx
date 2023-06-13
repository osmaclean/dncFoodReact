import { Link } from "react-router-dom";
import "./index.scss";

export default function Card({ data }) {
  return (
    <div className="Card">
      <img src={data.imgPath} alt={data.title} />
      <div className="Card__text">
        <span>{data.title}</span>
        <p>{data.price}</p>
        <Link className="link" to={`/product/${data.id}`}>
          <button>Adicionar</button>
        </Link>
      </div>
    </div>
  );
}
