import { useEffect, useState } from "react";

const data_lana = [
  {
    id: 1,
    tipo: "bola",
    img: "https://www.mundolanar.com/blog/wp-content/uploads/2013/12/tres-conos.jpg",
    price_sol: 36,
    price_dol: 4,
  },
  {
    id: 2,
    tipo: "cono",
    img: "https://www.mundolanar.com/blog/wp-content/uploads/2013/12/tres-conos.jpg",
    price_sol: 36,
    price_dol: 4,
  },
];

// useEffect(() => {
// codigo de extraccion de los datos
// });
import { Link } from "react-router-dom";

export default function Products() {
  // const [data, setData] = useState([]);
  // setData(data_lana);
  const proElements = data_lana.map((lana) => (
    <div key={lana.id} className="product-tile">
      <Link to={`/products/${lana.id}`}>
        <img src={lana.img} />
        <div className="lana-info">
          <h3 className="lana-type">{lana.tipo}</h3>
          {/* <h4 className="lana-type">Precio por kilo</h4> */}
          <p>$ {lana.price_dol}</p>
          <p>S/ {lana.price_sol}</p>
        </div>
      </Link>
    </div>
  ));
  // console.log(data);
  return (
    <div className="product-list-container">
      <div className="product-list">{proElements}</div>
    </div>
  );
}
