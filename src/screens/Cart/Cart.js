import React, { useContext } from "react";
import "./Cart.css";

import ProductCard from "../../components/ProductCard/ProductCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  clearCart,
  getCartTotal,
  getCartCount,
} from "../../features/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  
  const carts = useSelector((state) => state.carts.cartItems);
  console.log("ddddd", carts);
  const dispatch = useDispatch()

  let filtered = [];

  const onclearcart = () => {
    if (window.confirm("are you really want to clear cart?")) dispatch(clearCart());
  };

  return (
    <>
      <div className="container  mt-4 mb-4 flex-column  ">
        <h1 className="text-center">Carts</h1>
        {carts.length !== 0 ? (
          <div className="w-100 ">
            <button
              className="btn btn-danger m-3"
              onClick={onclearcart}
              style={{ float: "right" }}
            >
              <b>Clear cart</b>
            </button>
          </div>
        ) : (
          <div className="no-cart ">
            <h2 className=" ">your Cart is empty </h2>

            <button
              className="btn btn-info "
              onClick={() => navigate("/products")}
            >
              see products
            </button>
          </div>
        )}

        {params.get("added-product") ? (
          <div className=" added-success my-4">
            <h6 className="text-center  py-1" style={{ float: "left" }}>
              {" "}
              &nbsp;item Added to Cart &nbsp;
              <i class="fa-solid fa-circle-check fa-fade text-success"></i>{" "}
              &nbsp;{" "}
            </h6>
          </div>
        ) : (
          <></>
        )}

        <div className="d-flex  flex-wrap">
          {carts.map((product) => (
            <ProductCard key={product.id} product={product} cart={true} />
          ))}
        </div>

        <div className=" price-total container">
          <h5> {/*
            total {dispatch(getCartCount())} items:
            <span style={{ fontSize: "15px" }}>$</span>
            <b>{getCartTotal().toFixed(2)}</b> */}
          </h5>
        </div>
      </div>
    </>
  );
};

export default Cart;
