import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer-top-area pb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h3>Find Us</h3>
                <ul className="address">
                  <li className="location">
                    <i className="bx bxs-location-plus"></i>
                    India & United States
                  </li>
                  <li>
                    <i className="bx bxs-envelope"></i>
                    <a href="mailto:info@suesyslearning.com">
                      <span>info@suesyslearning.com</span>
                    </a>
                  </li>
                  <li>
                    <i className="bx bxs-phone-call"></i>
                    <a href="tel:18008902955">1800-890-2955</a>
                  </li>
                  <li>
                    <i className="bx bxl-whatsapp"></i>
                    <a href="tel:919346236785">+91 9346236785</a>
                  </li>
                </ul>
                <ul className="currencyList" style={{ marginTop: '20px' }}>
                  <li>
                    <select className="select2 form-control" id="currency-selector">
                      <option value="INR" selected>(INR) Indian Rupee</option>
                      <option value="USD">(USD) American Dollar</option>
                      <option value="CAD">(CAD) Canadian Dollar</option>
                      <option value="AUD">(AUD) Australian Dollar</option>
                      <option value="ZAR">(ZAR) South African Rand</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h3>Legal</h3>
                <ul className="link">
                  <li>
                    <a href="https://suesyslearning.com/about-us">About us</a>
                  </li>
                  <li>
                    <a href="https://suesyslearning.com/terms-and-conditoins">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="https://suesyslearning.com/terms-of-use">Terms of Use</a>
                  </li>
                  <li>
                    <a href="https://suesyslearning.com/privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="https://suesyslearning.com/refund-policy">Refund Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h3>Our Services</h3>
                <ul className="link">
                  <li>
                    <a href="#">Fast Track Training</a>
                  </li>
                  <li>
                    <a href="#">Online Training</a>
                  </li>
                  <li>
                    <a href="#">Corporate Training</a>
                  </li>
                  <li>
                    <a href="#">Weekend Training</a>
                  </li>
                  <li>
                    <a href="#">Internship Training</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h3>Connect with us</h3>
                <ul className="social-links">
                  <li>
                    <a href="#"><img src="https://suesyslearning.com/assets/img/f_facebook.png" alt="Facebook" /></a>
                    <a href="#"><img src="https://suesyslearning.com/assets/img/f_linkedin.png" alt="LinkedIn" /></a>
                    <a href="#"><img src="https://suesyslearning.com/assets/img/f_youtube.png" alt="YouTube" /></a>
                    <a href="#"><img src="https://suesyslearning.com/assets/img/f_instagram.png" alt="Instagram" /></a>
                    <a href="#"><img src="https://suesyslearning.com/assets/img/f_twitter.png" alt="Twitter" /></a>
                    <a href="#"><img src="https://suesyslearning.com/assets/img/whatsapp_footer.png" alt="WhatsApp" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom-area">
        <div className="container">
          <div className="copyright-wrap">
            <p>
              &copy; 2024 Suesys Learning. | Powered by: Suesys Recruitments Private Limited
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;





