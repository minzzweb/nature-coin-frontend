import ItemList from "../../components/item_board/ItemList";
import itemsData from "../../dummyData/itemsData";
import * as api from "../../lib/api";

const ItemListContainer = () => {
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
