import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

import './Footer.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 d-flex flex-column">
      <div className="container ">
        {/* Newsletter Signup Section */}
        <div className="text-center mb-4 mr-5">
          <h3>Stay updated with the latest offers and new arrivals!</h3>
          <form className="d-flex justify-content-center">
            <input
              type="email"
              className="form-control w-50 me-2"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="btn btn-dark">Subscribe</button>
          </form>
        </div>

        {/* Links Section */}
        <div className="row text-center text-md-start mb-4">
          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">Shop</a></li>
              <li><a href="#" className="text-white text-decoration-none">New Arrivals</a></li>
              <li><a href="#" className="text-white text-decoration-none">Best Sellers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Sale</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-4 mb-3">
            <h4>Customer Service</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">FAQ</a></li>
              <li><a href="#" className="text-white text-decoration-none">Shipping & Returns</a></li>
              <li><a href="#" className="text-white text-decoration-none">Track Order</a></li>
              <li><a href="#" className="text-white text-decoration-none">Size Guide</a></li>
              <li><a href="#" className="text-white text-decoration-none">Payment Methods</a></li>
              <li><a href="#" className="text-white text-decoration-none">Warranty & Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-4 mb-3 ">
            <h4>Company</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white    text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="d-flex f mb-4 ">
          <a href="#" className="text-primary me-3"><FaFacebook size={24} /></a>
          <a href="#" className="text-danger me-3"><FaInstagram size={24} /></a>
          <a href="#" className="text-info me-3"><FaTwitter size={24} /></a>
          {/* <a href="#" className="text-danger me-3"><FaPinterest size={24} /></a> */}
          <a href="#" className="text-danger"><FaYoutube size={24} /></a>
        </div>

        
      </div>
<hr className='container' />
      <div className="text-center text-secondary">
          <p>© 2024 Your Store Name. All rights reserved.</p>
          <p>Powered by Your eCommerce Platform</p>
        </div>
    </footer>
  )
}

export default Footer