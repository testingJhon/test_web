import { useOutletContext } from "react-router-dom";

export default function Photos() {
  const { list1 } = useOutletContext();
  console.log(list1);
  return <img src={list1.img}></img>;
}
