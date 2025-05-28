/*import {useDispatch, useSelector} from "react-redux";
import { BagSliceActions } from "../../store/BagSlice";
const BagItem=({bagitemID})=>{
 const dispatch= useDispatch();
 const Items=useSelector(store=>store.items);

 const BagItem=Items.find(item=> item.id===bagitemID );

  return(<>

  <div className="bag-item-container">
    <div className="item-left-part">
      <img className="bag-item-img" src={BagItem.image}/>
    </div>
    <div className="item-right-part">
      <div className="company">{BagItem.company}</div>
      <div className="item-name">{BagItem.item_name}</div>
    

      <div className="price-container">
        <span className="current-price">Rs {BagItem.current_price}</span>
        <span className="original-price">Rs {BagItem.original_price}</span>
        <span className="discount-percentage">({BagItem.discount_percentage}% OFF)</span>
      </div>
      <div className="return-period">
        <span className="return-period-days">{BagItem.return_period} days</span> return available
      </div>
      <div className="delivery-details">
        Delivery by
        <span className="delivery-details-days">{BagItem.delivery_date}</span>
      </div>
    </div>

    <div className="remove-from-cart" onClick={()=>{
      dispatch(BagSliceActions.removeFromBag(BagItem.id));
    }}>X</div>
  </div>
 
  </>

  )
}
export default BagItem;*/
import { useDispatch, useSelector } from "react-redux";
import { BagSliceActions } from "../../store/BagSlice";

const BagItem = ({ bagItem }) => {
  const dispatch = useDispatch();
  const Items = useSelector(store => store.items);
  const itemDetails = Items.find(item => item.id === bagItem.id);

 if(!itemDetails) return null;

  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={itemDetails.image} alt={itemDetails.item_name} />
      </div>
      <div className="item-right-part">
        <div className="company">{itemDetails.company}</div>
        <div className="item-name">{itemDetails.item_name}</div>

        <div className="price-container">
          <span className="current-price">Rs {itemDetails.current_price}</span>
          <span className="original-price">Rs {itemDetails.original_price}</span>
          <span className="discount-percentage">({itemDetails.discount_percentage}% OFF)</span>
        </div>

        <div className="return-period">
          <span className="return-period-days">{itemDetails.return_period} days</span> return available
        </div>
        <div className="delivery-details">
          Delivery by <span className="delivery-details-days">{itemDetails.delivery_date}</span>
        </div>

        <div className="quantity-controls">
          <button onClick={() => dispatch(BagSliceActions.decrementQuantity(bagItem.id))}>-</button>
          <span className="quantity-value">{bagItem.quantity}</span>
          <button onClick={() => dispatch(BagSliceActions.incrementQuantity(bagItem.id))}>+</button>
        </div>
      </div>

      <div
          className="remove-from-cart"
        onClick={() => dispatch(BagSliceActions.removeFromBag(bagItem.id))}
      >
        X
      </div>
    </div>
  );
};

export default BagItem;
