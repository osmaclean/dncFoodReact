import "./index.scss";

export default function Card({ data }) {
  return (
    <div className="Card">
      <img src={data.imgPath} alt={data.title} />
      <div className="Card__text">
        <span>{data.title}</span>
        <p>{data.price}</p>
        <button>Adicionar</button>
      </div>
    </div>
  );
}
