import { useEffect, useState } from "react";

const data_lana = [
  {
    id: 1,
    tipo: "PNA",
    img: [
      "https://www.mundolanar.com/blog/wp-content/uploads/2013/12/tres-conos.jpg",
      "https://pe.all.biz/img/pe/catalog/24521.jpeg",
    ],
    price_sol: 36,
    price_dol: 4,
  },
  {
    id: 2,
    tipo: "Pluma",
    img: [
      "https://www.mundolanar.com/blog/wp-content/uploads/2013/12/tres-conos.jpg",
      "https://pe.all.biz/img/pe/catalog/24521.jpeg",
    ],
    price_sol: 36,
    price_dol: 4,
  },
  {
    id: 3,
    tipo: "Pluma brillante",
    img: [
      "https://www.mundolanar.com/blog/wp-content/uploads/2013/12/tres-conos.jpg",
      "https://pe.all.biz/img/pe/catalog/24521.jpeg",
    ],
    price_sol: 36,
    price_dol: 4,
  },
];

// useEffect(() => {
// codigo de extraccion de los datos
// });
import { Link } from "react-router-dom";

import yarn_icon from "../assets/icons/yarn.svg";

export default function Productos() {
  // const [data, setData] = useState([]);
  // setData(data_lana);
  const proElements = data_lana.map((lana) => (
    <div key={lana.id} className="product-container">
      <h3 className="product-name">{lana.tipo}</h3>
      <div className="product-presentation">
        <img src={lana.img[0]} className="product-main-img" />
        <div className="product-img-info">
          <div className="product-images">
            <img src={lana.img[0]} />
            <img src={lana.img[1]} />
            <img src={lana.img[0]} />
            <img src={lana.img[1]} />
            <img src={lana.img[0]} />
            <img src={lana.img[1]} />
          </div>
          <button>
            <Link to={`/products/${lana.id}`} className="button-info">
              <span>Mas informacion</span>
              <svg viewBox="0 0 19 10" fill="none">
                <path
                  d="M18.3536 4.85355C18.5488 4.65829 18.5488 4.34171 18.3536 4.14645L15.1716 0.964466C14.9763 0.769204 14.6597 0.769204 14.4645 0.964466C14.2692 1.15973 14.2692 1.47631 14.4645 1.67157L17.2929 4.5L14.4645 7.32843C14.2692 7.52369 14.2692 7.84027 14.4645 8.03553C14.6597 8.2308 14.9763 8.2308 15.1716 8.03553L18.3536 4.85355ZM0 5H18V4H0V5Z"
                  // fill="red"
                />
              </svg>
            </Link>
          </button>
        </div>
        {/* <div className="lana-info"> */}
        {/* <h3 className="lana-type">{lana.tipo}</h3> */}
        {/* </div> */}
      </div>
    </div>
  ));
  // console.log(data);
  return (
    <section className="product-list-container">
      <div className="icon-title">
        <img src={yarn_icon} alt="yarn" />
        <h2> Lanas</h2>
      </div>
      <hr />
      <div className="product-list">{proElements}</div>
    </section>
  );
}