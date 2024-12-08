import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import { CartContext } from '../../Contexts/CartContext'
import { addTocart } from '../../features/cartSlice'

import "./styles.css"
import { useDispatch, useSelector } from 'react-redux'


const ProductDetails = () => {
    // const  { addToCart } = useContext(CartContext)

    const navigate =  useNavigate()

    const dispatch = useDispatch()
   



    const { id } = useParams()
    const  [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false);


    // function onaddcart() {
    //     addToCart(product) 
    //     navigate('/cart?added-product='+product.id)

        
        
    //     // navigate('/cart')
    //     // if(!cart)
    //     //  alert("item added to cart")

    // }
    
   const getProduct = async ()  => {
    setLoading(true);

    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    setProduct(data)
    setLoading(false);
    
}

useEffect(() => {
    getProduct()
    }, [id])
console.log(product);


  return (



    <>

    {
      loading?
      <div className="d-flex justify-content-center my-3">
      <div className="loader my-5"></div>
      </div>:
      <div className="container mt-5  mb-5 ">
  <div className="row">
    <div className="col-md-6">
      <img src={product.image} alt="Product Image" className="w-50"/>
    </div>


    <div className="col-md-6">
      <h2>{product.title}</h2>
      <hr />
      <p>{product.description}</p>
      <hr />
      <ul>
        <li><strong>Price:</strong>{product.price}</li>
        <li><strong>Category:</strong> {product.category}</li>
      </ul>
     <div  className="d-flex justify-content-center mt-5 ">

     <button className="btn btn-warning rounded-pill w-50 fw-bold text-white" onClick={()=>dispatch(addTocart(product))}>Add to Cart</button>
     </div>
    </div>
  </div>

  
</div>
    }
    
    

    </>
  )
}

export default ProductDetails