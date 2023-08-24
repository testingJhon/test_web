import { useState } from "react";
import { Link, NavLink, Outlet, Route, useParams } from "react-router-dom";

import { data_lana } from "./Productos";
import yarn_icon from "../assets/icons/yarn.svg";
import "../assets/product_details.scss";

function findLanaID(id) {
  const list1 = data_lana.filter((a) => a.id == id)[0];
  // console.log(list1);
  const [index, setIndex] = useState(0);
  const recibirParametro = (val) => setIndex(val);
  const details = (
    <div className="lana-detail-container">
      {/* <div className="lana-detail"> */}
      <img src={list1.img[index]} className="details-main-img"></img>
      {/* </div> */}
      <section className="nav-details">
        <nav className="nav-description">
          <NavLink end to=".">
            Fotos
          </NavLink>
          <NavLink to="colors">Colores</NavLink>
          <NavLink to="details">Detalles</NavLink>
          <NavLink to="details">Precio</NavLink>
        </nav>
        <Outlet
          context={{ list1, recibirParametro }}
          // recibirParametro={recibirParametro}
        />
      </section>
    </div>
  );
  return details;
}

export default function ProductDetail() {
  const params = useParams();
  const list1 = data_lana.filter((data) => data.id == params.id)[0];
  // console.log(list1);

  return (
    <section className="product-description-container">
      <div className="icon-title">
        <img src={yarn_icon} alt="yarn" />
        <h2 className="tipe">
          {list1.tipo} <span>- {list1.name_ref}</span>
        </h2>
      </div>
      <hr />
      <section className="product-detail-container">
        <Link to=".." className="back-button">
          <span>&larr;</span>
          <p>Volver a la lista</p>
        </Link>
        {data_lana[0] ? findLanaID(params.id) : <div>cargando</div>}
      </section>
    </section>
  );
}
