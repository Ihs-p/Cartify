import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/logo-dark-1.jpg"; // replace with your logo image
import "./Header.css"; // replace with your stylesheet
import { useDispatch } from "react-redux";
import { setSearch,getCartCount } from '../../features/cartSlice'


const Header = () => {
  // const { getCartCount, setSearch } = useContext(CartContext);
  // const  = useSelector((state) => state.carts.search)

  const dispatch = useDispatch()


  let count = getCartCount();

  return (
    <>
      <header className="header container-fluid w-100 position-sticky z-3 top-0">
        <div className="container">
          <div className="logo">
            <Link to="/" style={{color:"white",fontSize:"30px",textDecoration:"none"}}>
              Cartify 
            </Link>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className="d-flex flex-column align-items-center"
                  activeClassName="active-link"
                >
                  <i class="fa-solid fa-house-chimney "></i>
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="d-flex flex-column align-items-center"
                >
                  <i
                    class="fa-brands fa-product-hunt"
                    style={{ color: "#FFD43B;" }}
                  ></i>
                  <span>Products</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/cart"
                  className="d-flex flex-column align-items-center"
                 
                >
                  {/* {count === 0 ? (
                    <i class="fa-solid fa-cart-shopping"></i>
                  ) : (
                    <>
                    <i class="fa badge fa-lg " value={count}>
                      <i class="fa-solid fa-cart-shopping "></i>
                     </i>

                      </>
                  )} */}

                  <span>Carts </span>
                </NavLink>
              </li>

              {/* {count?<span className='bg-dark rounded       ' >{count}</span>:<></>} */}

              <li>
                <NavLink
                  to="/contact"
                  className="d-flex flex-column align-items-center "
                  activeClassName="active-link"
                >
                  <i class="fa-solid fa-mobile-screen-button"></i>{" "}
                  <span>Contact</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="d-flex flex-column align-items-center "
                  activeClassName="active-link"
                >
                  <i class="fa-solid fa-circle-info"></i>
                  <span>About</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="search-bar">
            <input
              type="search"
              placeholder="Search products..."
              onChange={(e) => dispatch(setSearch(e.target.value))}
              className="form-control rounded-pill"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
