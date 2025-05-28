import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header=()=>{
 const bagItems= useSelector(store=>store.bag);
const bagsize = bagItems.reduce((total, item) => total + item.quantity, 0);
 console.log(bagsize)
return (<>  <header>
  <div className="logo_container">
      <Link to="/"><img className="myntra_home" src="../images/myntra_logo.webp" alt="Myntra Home"/></Link>
  </div>
  <nav className="nav_bar">
      <Link to="/men">Men</Link>
      <Link to="/women">Women</Link>
      <Link to="/kids">Kids</Link>
      <Link to="/Home&Living">Home & Living</Link>
      <Link to="/Beauty">Beauty</Link>
      <Link to="/Studio">Studio <sup>New</sup></Link>
  </nav>
  <div className="search_bar">
      <button   className="material-symbols-outlined search_icon"><IoIosSearch className="search"></IoIosSearch></button>
      <input className="search_input" placeholder="Search for products, brands and more"/>
  </div>
  <div className="action_bar">
      <div className="action_container">
        <CgProfile></CgProfile>
          <span className="action_name">Profile</span>
      </div>

      <div className="action_container">
        <FaRegFaceGrinHearts></FaRegFaceGrinHearts>
          <span className="action_name">Wishlist</span>
      </div>

      <Link className="action_container" to="/bag">
      <FaShoppingBag></FaShoppingBag>
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bagsize}</span>
          
         </Link>
  </div>
  </header>
  </>
)
}
export default Header;