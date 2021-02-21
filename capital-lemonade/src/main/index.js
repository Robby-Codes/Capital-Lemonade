import React, { ComponentDidMount } from "react";
import { images } from "./images";
import "./animations";
import "./main.css";

// Main Site Component
const CapitalLemonade = () => {
  return (
    <>
      <BannerSection />
      <ParkSection />
      <ProductSection />
      <FooterSection />
    </>
  );
};

// Banner Section Component
const BannerSection = () => {
  return (
    <section id="banner-section">
      <div className="banner-content">
        <h1>
          Capital <br /> Lemonade
        </h1>
        <div className="banner-buttons">
          <div>
            <a href="#park-section">
              <button>
                <span>Park</span>
              </button>
            </a>
          </div>
          <a href="#product-section">
            <button>
              <span>On-Sight Drinks</span>
            </button>
          </a>
          <div>
            <a href="#footer-section">
              <button>
                <span>Contact</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Park Section Component
const ParkSection = () => {
  return (
    <section id="park-section">
      <h1>Capital Lemon Park</h1>
      <div className="park1 pic">
        <div>
          <img className="image-1" src={images.park1} />
          <p>Hundreds Of Lemon Trees!</p>
        </div>
        <div className="line l1"></div>
        <div className="description d1">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            illum sit error, amet molestiae recusandae dolorem ut tenetur nam
            optio libero voluptatem corrupti accusantium exercitationem commodi
            vel culpa ullam ducimus.
          </p>
        </div>
      </div>
      <div className="park2 pic">
        <div>
          <img className="image-2" src={images.park2} />
          <p>Complementary Lemons</p>
        </div>
        <div className="line l2"></div>
        <div className="description d2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            illum sit error, amet molestiae recusandae dolorem ut tenetur nam
            optio libero voluptatem corrupti accusantium exercitationem commodi
            vel culpa ullam ducimus.
          </p>
        </div>
      </div>
      <div className="park3 pic">
        <div>
          <img className="image-3" src={images.park3} />
          <p>100% Organic Lemonade</p>
        </div>
        <div className="line l3"></div>
        <div className="description d3">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            illum sit error, amet molestiae recusandae dolorem ut tenetur nam
            optio libero voluptatem corrupti accusantium exercitationem commodi
            vel culpa ullam ducimus.
          </p>
        </div>
      </div>
    </section>
  );
};

// Product Section Component
const ProductSection = () => {
  return (
    <section id="product-section">
      <h1>Onsight Beverages</h1>
      <div className="drinks-container">
        <Product
          img={images.drink1}
          price={"$6.99"}
          description={
            "Lorem ipsum dolor sit, amet consectetur niti ipsam? Enim assumenda pariatur, unde perspiciatis fugiat accusamus eligendtaque provident deserunt."
          }
        />
        <Product
          img={images.drink2}
          price={"$5.99"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, repudiandae. Quo vel adipisci rerum ad accusantium, deleniti ipsam? Enim assumenda pariatur, unde perspiciatis fugiat accusamus eligendi impedit itaque provident deserunt."
          }
        />
        <Product
          img={images.drink3}
          price={"12.99"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, repudiandae. Quo vel adipisci rerum Enim assumenda pariatur, unde perspiciatis fugiat accusamus eligendi impedit itaque provident deserunt."
          }
        />
      </div>
    </section>
  );
};

// Individual Drinks/Products component
const Product = ({ img, price, description }) => {
  return (
    <div className="drinks">
      <img src={img} />
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};

// Footer Section Component
const FooterSection = () => {
  return (
    <footer id="footer-section">
      <ContactInfo />
      <ContactForm />
      <small>Created By: Roberto Guerra</small>
    </footer>
  );
};

// Cantact Info for Footer Section
const ContactInfo = () => {
  return (
    <div className="info-container">
      <h1>Contact Information</h1>
      <div className="info">
        <a href="tel:555-555-5555">
          <img src={images.phone} />
          <div>
            <h1>Call Us</h1>
            <p>555-555-5555</p>
          </div>
        </a>
      </div>
      <div className="info">
        <a href="mailto:NotReal@gmail.com">
          <img src={images.email} />
          <div>
            <h1>eMail</h1>
            <p>NotReal@gmail.com</p>
          </div>
        </a>
      </div>
      <div className="info">
        <a href=".">
          <img src={images.location} />
          <div>
            <h1>Location</h1>
            <p>Lorem ipsum ST, Nowhere</p>
          </div>
        </a>
      </div>
      <div className="info-medias">
        <h1>Social Media</h1>
        <div className="social">
          <a href=".">
            <img src={images.twitter} />
            <p>Follow Us On Twitter</p>
          </a>
        </div>
        <div className="social">
          <a href=".">
            <img src={images.facebook} />
            <p>Capital Lemonade's Facebook Page</p>
          </a>
        </div>
        <div className="social">
          <a href=".">
            <img src={images.youtube} />
            <p>Check Out Our YouTube Channel</p>
          </a>
        </div>
      </div>
    </div>
  );
};

// Contact Form component for Footer Section
const ContactForm = () => {
  return (
    <div className="contact-form">
      <h1>Send Us A Message</h1>
      <form action="." method="GET">
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label for="about">Subject</label>
          <input type="text" id="about" required />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea type="text" id="message" required></textarea>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default CapitalLemonade;
