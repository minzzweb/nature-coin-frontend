import { useDispatch, useSelector } from "react-redux";
import ItemList from "../../components/item_board/ItemList";
import itemsData from "../../dummyData/itemsData";
import * as api from "../../lib/api";
import { fetchUserCoin } from "../../modules/coin";

const ItemListContainer = () => {
  const dispatch = useDispatch();

  const { userCoin } = useSelector(({ coin }) => ({
    userCoin: coin.userCoin,
  }));

  const onBuy = async (itemId, itemName, price) => {
    try {
      const response = await api.buyItemApi(itemId, itemName, price);
      dispatch(fetchUserCoin());
      alert(response.data);
      console.log("userCoin가져오기" + userCoin);
    } catch (e) {
      alert(e.response.data);
    }
  };

  return <ItemList itemsData={itemsData} onBuy={onBuy} />;
};
export default ItemListContainer;
