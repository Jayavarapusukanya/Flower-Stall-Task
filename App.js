import React from "react";
import ProductList from "./Components/ProductList"; 
import TeamSection from "./Components/TeamSection"; 
import Offers from "./Components/Offers";

import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">fiama</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Pages</a>
          <a href="#">Shop</a>
          <a href="#">Portfolio</a>
          <a href="#">News</a>
          <a href="#">Contact</a>
        </nav>
        <div className="cart">🛒 Your Cart - $89.25</div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span>Flower & Gift</span>
          <h1>Perfect Bunch For Every Occasion</h1>
          <button className="shop-btn">Shop Now</button>
        </div>
      </section>

      <ProductList />

      <Offers />

      <TeamSection />



      {/* Newsletter Section */}
      <section className="newsletter">
        <h2>Get The Latest Deals</h2>
        <p>$30 coupon for first shopping</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Email*" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>My Account</h3>
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Checkout</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shopping Cart</a></li>
              <li><a href="#">Wishlist</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Store Location</a></li>
              <li><a href="#">Orders Tracking</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">My Account</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Information</h3>
            <ul>
              <li><a href="#">Privacy Page</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Delivery Information</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Help & Contact Us</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">Online Stores</a></li>
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About Our Shop</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Brooklyn, New York, United States</p>
            <p>+0123-456789</p>
            <p>example@example.com</p>
            <p>&copy; 2025 - Just For You</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
