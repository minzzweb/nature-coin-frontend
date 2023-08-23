import ItemList from "../components/item_board/ItemList";
import itemsData from "../components/item_board/itemsData";
import * as api from "../lib/api";
import { useNavigate } from "react-router-dom";

const ItemListContainer = () => {
  const navigate = useNavigate();

  const onBuy = async (itemId, itemName, price) => {
    try {
      const response = await api.buyItemApi(itemId, itemName, price);

      alert(response.data);
    } catch (e) {
      alert(e.response.data);
    }
  };

  return <ItemList itemsData={itemsData} onBuy={onBuy} />;
};
export default ItemListContainer;
