import React from 'react'
import Products from '../Products/Products'

const Home = () => {
  return (
    <>
    
   <div className="container-fluid bg-light">
   <div id="carouselExampleIndicators" className="carousel slide mt-3" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/c4ad2401e564b4be.jpg?q=50" className="d-block w-100" alt="Slide 1"/>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/61775218f4487fe8.jpg?q=20" className="d-block w-100" alt="Slide 2"/>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/5bd1462b62aab134.jpg?q=50" className="d-block w-100" alt="Slide 3"/>
    </div>
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </div>

<Products/>

    </>
  )
}

export default Home