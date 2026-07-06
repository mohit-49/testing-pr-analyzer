"use client"
import "./footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        {/* <Link href="/">
          <div className="footer-logo-section">
            <img src="/group1-removebg-preview.png" alt="Logo" className="footer-logo" />
            <strong className="footer-title">Infinity<br /><span className="footer-subtitle">Domains </span></strong>
          </div>
        </Link> */}
         <Link href="/">
        <div className="header-left">
          <img src="/group1-removebg-preview.png" alt="Logo" className="header-logo" />
          <strong className="site-title">Infinity<br /><span className="site-subtitle">Domains</span></strong>
        </div>
      </Link>
        <p className="footer-description">
          Web3 digital identity management platform & Marketplace: all in one place
        </p>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/" target="_blank" rel="noopener noreferrer">Home</a></li>
              <li><a href="/footer/about-us" target="_blank" rel="noopener noreferrer">About Us</a></li>
              <li><a href="/globalHeader/market-place" target="_blank" rel="noopener noreferrer">Marketplace</a></li>
              <li><a href="/footer/vision-mission" target="_blank" rel="noopener noreferrer">Vision</a></li>
              <li><a href="/footer/community-page" target="_blank" rel="noopener noreferrer">Community</a></li>
              <li><a href="/footer/event-page" target="_blank" rel="noopener noreferrer">Events</a></li>
              <li><a href="/footer/domain-apprasial" target="_blank" rel="noopener noreferrer">Domain Appraisal</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Follow us on</h4>
            <ul>
              <li><a href="/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="/" target="_blank" rel="noopener noreferrer">Discord</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Our Locations</h4>
            <ul>
              <li>Hong Kong</li>
              <li>Dubai</li>
              <li>India</li>
            </ul>
          </div>

          <div className="footer-column newsletter-column">
            <h4>Join Newsletter</h4>
            <p>Inform. Inspire. Stay Connected.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email" className="newsletter-input" />
              <button type="submit" className="subscribe-button">Subscribe</button>
            </form>
            <button className="help-support-button">Help & Support</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>©2026 Magic Fly Labs Limited. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="mailto:support@infinitydomains">Support: support@infinitydomains</a>
          <Link href="/footer/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
          <Link href="/footer/terms-and-condition" target="_blank" rel="noopener noreferrer">Terms and Condition</Link>
        </div>
      </div>
    </footer>
  );
}
