import Header from "../header";
import Footer from "../../Footer/footer";
import GoogleTranslate from "../../common/GoogleTranslate/googleTranslate";
import "./blog.css";

export default function Blog() {
  return (
    <div>
      <Header />
      <GoogleTranslate />
      <div className="blog-page">
        <h1 className="coming-soon">
          <span>Coming Soon</span>    
          <span>Coming Soon</span>    
        </h1>
      </div>
      <Footer />
    </div>
  );
}
