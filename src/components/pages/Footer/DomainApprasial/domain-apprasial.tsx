import Header from "../../Header/header";
import Footer from "../footer";
import "./domain-apprasial.css";

export default function DomainApprasial() {
  return (
    <div>
      <Header />

      <div className="appraisal-page">

        {/* Heading */}
        <h1 className="coming-soon">
          <span>Coming Soon</span>
        </h1>

        {/* Description */}
        <p className="appraisal-text">
          Curious to know how much your domain name is worth?  
          Stay tuned — our domain appraisal tool will be available soon!
        </p>

        {/* Subscribe */}
        <form className="subscribe-form">
          <input
            type="email"
            placeholder="Your Email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>

      </div>

      <Footer />
    </div>
  );
}
