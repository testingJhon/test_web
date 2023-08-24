import { useEffect, useState } from "react";

export const data_lana = [
  {
    id: 1,
    tipo: "lana",
    name_ref: "APN",
    img: ["../../public/lana/3conos.jpg", "../../public/lana/6conos.jpeg"],
  },
  {
    id: 2,
    tipo: "lana",
    name_ref: "Pluma",
    img: ["../../public/lana/3conos.jpg", "../../public/lana/6conos.jpeg"],
  },
  {
    id: 3,
    tipo: "lana",
    name_ref: "Pluma de cristal",
    img: ["../../public/lana/3conos.jpg", "../../public/lana/6conos.jpeg"],
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
  // const imgs_show

  const proElements = data_lana.map((lana, index) => {
    const [actualImg, setActualImg] = useState(0);
    return (
      <div key={lana.id} className="product-container">
        <h3 className="product-name">{lana.name_ref}</h3>
        <div className="product-presentation">
          {/* {const [actualImg, setActualImg] = useState(0)} */}
          <img src={lana.img[actualImg]} className="product-main-img" />
          <div className="product-img-info">
            <div className="product-images">
              {lana.img.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setActualImg(index)}
                />
              ))}
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
        </div>
      </div>
    );
  });
  // console.log(data);
  return (
    <section className="product-list-container">
      <div className="icon-title">
        <img src={yarn_icon} alt="yarn" />
        <h2 className="tipe">{data_lana[0].tipo + "s"}</h2>
      </div>
      <hr />
      <div className="product-list">{proElements}</div>
    </section>
  );
}
