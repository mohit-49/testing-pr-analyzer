import Header from "../header";
import Footer from "../../Footer/footer";
import "./market-place.css";
import GoogleTranslate from "../../common/GoogleTranslate/googleTranslate";

export default function MarketPlace() {
  return (
    <div>
      <Header />
      <GoogleTranslate />
      <div className="market-page">
        <h1 className="coming-soon">
          <span>Coming Soon</span>
          <span>Coming Soon</span>
        </h1>
      </div>
      <Footer />
    </div>
  );
}
