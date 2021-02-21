import React from "react";

const CapitalLemonade = () => {
  return <h1>Testing</h1>;
};

const BannerSection = () => {
  return (
    <section id="banner-section">
      <div class="banner-content">
        <h1>
          Capital <br /> Lemonade
        </h1>
        <div class="banner-buttons">
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
                <span>About</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ParkSection = () => {
  return (
    <section id="park-section">
      <h1>Capital Lemon Park</h1>
      <div class="park1 pic">
        <div>
          <img class="image-1" src="assets/park2.jpeg" />
          <p>Hundreds Of Lemon Trees!</p>
        </div>
        <div class="line l1"></div>
        <div class="description d1">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            illum sit error, amet molestiae recusandae dolorem ut tenetur nam
            optio libero voluptatem corrupti accusantium exercitationem commodi
            vel culpa ullam ducimus.
          </p>
        </div>
      </div>
      <div class="park2 pic">
        <div>
          <img class="image-2" src="assets/park3.jpeg" />
          <p>Complementary Lemons</p>
        </div>
        <div class="line l2"></div>
        <div class="description d2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            illum sit error, amet molestiae recusandae dolorem ut tenetur nam
            optio libero voluptatem corrupti accusantium exercitationem commodi
            vel culpa ullam ducimus.
          </p>
        </div>
      </div>
      <div class="park3 pic">
        <div>
          <img class="image-3" src="assets/park4.jpg" />
          <p>100% Organic Lemonade</p>
        </div>
        <div class="line l3"></div>
        <div class="description d3">
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

const ProductSection = () => {
  return (
    <section id="product-section">
      <h1>Onsight Beverages</h1>
      <div class="drinks-container">
        <div class="drinks">
          <img src="assets/drink2.jpg" />
          <p>$6.99</p>
          <p>
            Lorem ipsum dolor sit, amet consecteturniti ipsam? Enim assumenda
            pariatur, unde perspiciatis fugiat accusamus eligendtaque provident
            deserunt.
          </p>
        </div>
        <div class="drinks">
          <img src="assets/drink4.jpg" />
          <p>$5.99</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
            repudiandae. Quo vel adipisci rerum ad accusantium, deleniti ipsam?
            Enim assumenda pariatur, unde perspiciatis fugiat accusamus eligendi
            impedit itaque provident deserunt.
          </p>
        </div>
        <div class="drinks">
          <img src="assets/drink3.jpg" />
          <p>$12.99</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
            repudiandae. Quo vel adipisci rerum Enim assumenda pariatur, unde
            perspiciatis fugiat accusamus eligendi impedit itaque provident
            deserunt.
          </p>
        </div>
      </div>
    </section>
  );
};

const FooterSection = () => {
  return (
    <footer id="footer-section">
      <div class="info-container">
        <h1>Contact Information</h1>
        <div class="info">
          <a href="tel:555-555-5555">
            <img src="assets/phone.png" />
            <div>
              <h1>Call Us</h1>
              <p>555-555-5555</p>
            </div>
          </a>
        </div>
        <div class="info">
          <a href="mailto:NotReal@gmail.com">
            <img src="assets/email.png" />
            <div>
              <h1>eMail</h1>
              <p>NotReal@gmail.com</p>
            </div>
          </a>
        </div>
        <div class="info">
          <a href=".">
            <img src="assets/location.png" />
            <div>
              <h1>Location</h1>
              <p>Lorem ipsum ST, Nowhere</p>
            </div>
          </a>
        </div>
        <div class="info-medias">
          <h1>Social Media</h1>
          <div class="social">
            <a href=".">
              <img src="assets/twitter.png" />
              <p>Follow Us On Twitter</p>
            </a>
          </div>
          <div class="social">
            <a href=".">
              <img src="assets/facebook.png" />
              <p>Capital Lemonade's Facebook Page</p>
            </a>
          </div>
          <div class="social">
            <a href=".">
              <img src="assets/youtube.png" />
              <p>Check Out Our YouTube Channel</p>
            </a>
          </div>
        </div>
      </div>
      <div class="contact-form">
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
    </footer>
  );
};

export default CapitalLemonade;
