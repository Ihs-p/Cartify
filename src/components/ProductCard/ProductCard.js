import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import {
  addTocart,
  removeFromCart,
} from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductCard({ product, cart }) {
  const navigate = useNavigate();

  const dispatch = useDispatch()

  function onaddcart() {
    dispatch(addTocart(product))
    // navigate('/cart')
    // if(!cart)
    //  alert("item added to cart")
  }

  function onremovecart() {
    if (product.quantity === 1) {
      if (window.confirm("do you want to remove this item from cart")) {
        dispatch(removeFromCart(product));
     
      }
    } else {
      dispatch(removeFromCart(product));    }
  }

  const imagesize = {
    width: "200px",
    height: "200px",
    objectFit: "contain",
    marginLeft: "50px",
  };

  return (
    <div
      className="card  mb-4  "
      style={{ width: "18rem", marginRight: "5px" }}
    >
      <img
        src={product.image}
        className="card-img object-fit-contain"
        alt="Card image"
        style={imagesize}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h5 className="card-title">
          <span style={{ fontSize: "15px" }}>$</span>
          <b>{product.price}</b>
        </h5>
        {/* <p className="card-text" >{product.description.substr(0,160)+'...'}</p> */}

        {cart ? (
          <h5 className="card-title">
            Qauntity :
            <a
              className="btn btn-outline-success rounded btn-center  m-2"
              onClick={onremovecart}
            >
              <b>-</b>
            </a>
            {product.quantity}
            <a
              className="btn btn-outline-success rounded btn-center  m-2"
              onClick={onaddcart}
            >
              <b>+</b>
            </a>
          </h5>
        ) : (
          <i></i>
        )}
      </div>
      <div className=" d-flex  justify-content-center">
        {!cart ? (
          <Link
            className="btn btn-info rounded-pill btn-center form-control m-2"
            to={`/product-details/${product.id}`}
          >
            Product Details
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
