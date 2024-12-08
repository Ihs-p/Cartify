import React, { useState, useEffect, useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CartContext } from "../../Contexts/CartContext";

import "./Products.css"
import { useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const { search } = useContext(CartContext);
  const search = useSelector((state) => state.carts.search)


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    if (search) {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setProducts(filteredProducts);
    } else {
      fetchProducts(); // Call fetchProducts when search is empty
    }
  }, [search]);

  if (loading) {
    return (
      <>
        <h2 className="text-center bg-light w-100 mt-3 mb-2">Our Products</h2>
        <div className="d-flex justify-content-center my-3">
        <div className="loader my-5"></div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <div className="container flex-column">
        <h2 className="text-center bg-light w-100 mt-3 mb-2">Our Products</h2>
        <div className="d-flex justify-content-center mt-3">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container flex-column">
      <h2 className="text-center bg-light w-100 mt-3 mb-2">Our Products</h2>
      <div className="d-flex flex-wrap justify-content-between mt-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} cart={false} />
        ))}
      </div>
    </div>
  );
};

export default Products;