import { Link, NavLink, Outlet, Route, useParams } from "react-router-dom";

const data_lana = [
  {
    id: 1,
    tipo: "bola",
    img: "https://www.mundolanar.com/blog/wp-content/uploads/2013/12/tres-conos.jpg",
    price_sol: 36,
    price_dol: 4,
    description: "mucho texto aqui",
  },
  {
    id: 2,
    tipo: "cono",
    img: "https://www.mundolanar.com/blog/wp-content/uploads/2013/12/tres-conos.jpg",
    price_sol: 36,
    price_dol: 4,
  },
];

function findLanaID(id) {
  const list1 = data_lana.filter((a) => a.id == id)[0];
  console.log(list1);
  const details = (
    <div className="lana-detail-container">
      <div className="lana-detail">
        <img src={list1.img}></img>
        <div className="lana-detail-info-text">
          <h2>{list1.tipo}</h2>
          <p className="product-precio">$ {list1.price_dol}</p>
          <p>{list1.description}</p>
        </div>
      </div>
      <nav className="nav-description">
        <NavLink end to=".">
          fotos
        </NavLink>
        <NavLink to="colors">colors</NavLink>
        <NavLink to="details">details</NavLink>
      </nav>
      <Outlet context={{ list1 }} />
    </div>
  );
  return details;
}

export default function ProductDetail() {
  const params = useParams();
  // console.log(params);

  return (
    <section className="product-detail">
      <Link to=".." className="back-button">
        &larr; atras
      </Link>
      {data_lana[0] ? findLanaID(params.id) : <div>cargando</div>}
    </section>
  );
}
