import { useOutletContext } from "react-router-dom";

export default function Photos() {
  const { list1, recibirParametro } = useOutletContext();

  const handleTab = (index) => recibirParametro(index);
  const imagenes = list1.img.map((image, index) => (
    <img
      className="select-photo"
      src={image}
      key={index}
      onClick={() => handleTab(index)}
    ></img>
  ));

  // console.log(list1);
  return imagenes;
}
