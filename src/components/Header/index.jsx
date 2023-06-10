import "./index.scss";
import logo from "../../assets/logo.png";
import cart from "../../../public/cart.png";

export default function Header() {
  return (
    <header className="Header">
      <figure>
        <img src={logo} alt="Logotipo DNC Food" />
      </figure>
      <ul>
        <li>Variedades</li>
        <li>Lanches</li>
        <li>Pizzas</li>
        <li>Doces</li>
        <li>Promoções</li>
      </ul>
      <button>
        Minhas compras
        <img src={cart} alt="" />
      </button>
    </header>
  );
}
