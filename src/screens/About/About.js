import React from 'react'

import "./About.css"

const About = () => {
  return (
    <>
    {/* <h2 classNameName='text-center fw-bold'>About Us</h2>    */}
    
    {/* <section className="hero-section">
  <div className="container">
    <h1>About [Your Company]</h1>
    <p>Your go-to destination for quality products and exceptional customer service.</p>
  </div>
</section> */}

{/* <!-- About Us Content --> */}
<section className="about-content">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h2>Who We Are</h2>
        <p>
          At [Your Company], we believe in offering top-quality products that make life easier and more enjoyable. Since our founding in [Year], we've grown into a trusted destination for [Product Category], delivering innovation, convenience, and value to customers around the globe.
        </p>
        <p>
          We started with a simple mission: to create a seamless shopping experience by combining premium products with excellent customer support. Today, that mission continues to drive us forward as we expand our offerings and reach new milestones.
        </p>
      </div>
      <div className="col-md-6">
        <img src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid" alt="Who We Are"/>
      </div>
    </div>
  </div>
</section>

{/* <!-- Core Values Section --> */}
<section className="values-section">
  <div className="container">
    <div className="row text-center">
      <div className="col-12">
        <h3>Our Core Values</h3>
        <p className="text-muted">What drives us to be the best in everything we do.</p>
      </div>

      <div className="col-md-4">
        <div className="value-card">
          <img src="https://images.pexels.com/photos/6567285/pexels-photo-6567285.jpeg?auto=compress&cs=tinysrgb&w=600"
          className='w-100'
          alt="Value 1"/>
          <h5>Customer First</h5>
          <p>We prioritize our customers' needs and strive to exceed their expectations every time.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="value-card">
          <img src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600"
          className='w-100'
          alt="Value 2"/>
          <h5>Innovation</h5>
          <p>We embrace creativity and constantly seek out new ways to improve our products and services.</p>
        </div>
      </div>

      <div className="col-md-4">
        <div className="value-card">
          <img src="https://images.pexels.com/photos/10815211/pexels-photo-10815211.jpeg?auto=compress&cs=tinysrgb&w=600"
          className='w-100'
          alt="Value 3"/>
          <h5>Integrity</h5>
          <p>We conduct our business with honesty and integrity, earning the trust of our customers and partners.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <!-- Team Section --> */}
<section className="team-section">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h3 className="text-center mb-5">Meet Our Team</h3>
      </div>

      <div className="d-flex justify-content-center">

      <div className="col-md-4 team-member">
        <img src="https://images.pexels.com/photos/3771082/pexels-photo-3771082.jpeg?auto=compress&cs=tinysrgb&w=600"
        className='W-100 object-fit-cover'
        alt="Team Member 1"/>
        <h5>John Doe</h5>
        <p>Founder & CEO</p>
      </div>

      <div className="col-md-4 team-member">
      <img src="https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
        className='W-100 object-fit-cover'
        alt="Team Member 2"/>
        <h5>Jane Smith</h5>
        <p>Chief Operating Officer</p>
      </div>

      <div className="col-md-4 team-member">
        <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
        className='W-100 object-fit-cover'
        alt="Team Member 3"/>
        <h5>David Lee</h5>
        <p>Lead Designer</p>
      </div>
      </div>
    </div>
  </div>
</section>
    
    
    </>
  )
}

export default About