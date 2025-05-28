import { useSelector } from "react-redux";
import "./bag.css";

const BagSummary = () => {
  const bagSummary = {
    totalDiscount: 0,
    totalMRP: 0,
    totalItem: 0,
    FinalPayment: 99,
  };

  const items = useSelector(store => store.items); // All items
  const bagItems = useSelector(store => store.bag); // [{ id, quantity }]

  // For each bag item, find its full details
  bagItems.forEach(({ id, quantity }) => {
    const item = items.find(i => i.id === id);
    if (item) {
      bagSummary.totalMRP += item.original_price * quantity;
      bagSummary.totalDiscount += (item.original_price - item.current_price) * quantity;
      bagSummary.totalItem += quantity;
      bagSummary.FinalPayment += item.current_price * quantity;
    }
  });

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({bagSummary.totalItem} Items)</div>

        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{bagSummary.totalMRP}</span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">-₹{bagSummary.totalDiscount}</span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>

        <hr />

        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">
            ₹{bagSummary.totalMRP === 0 ? "0" : bagSummary.FinalPayment}
          </span>
        </div>
      </div>

      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
