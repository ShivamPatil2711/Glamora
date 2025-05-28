import { useSelector } from "react-redux";
import BagItem from "./Bagitem";
import BagSummary from "./BagSummary";
import Footer from "./Footer";
import Header from "./Header";



const Bag = () => {
  const bagItems = useSelector(store => store.bag); // ✅ [{ id, quantity }]

  return (
    <>
     
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {bagItems.map(item => (
              <BagItem key={item.id} bagItem={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
     
    </>
  );
};

export default Bag;
