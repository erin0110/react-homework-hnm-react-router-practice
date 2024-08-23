import { useNavigate } from "react-router-dom";
import "./ProductCrad.css";

const ProductCrad = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="prd-card" onClick={showDetail}>
      <img src={item?.img} alt="" />
      <em>{item?.choice && "Conscious choice"}</em>
      <span>{item?.title}</span>
      <strong>₩{item?.price}</strong>
      <i>{item?.new && "신제품"}</i>
    </div>
  );
};

export default ProductCrad;
