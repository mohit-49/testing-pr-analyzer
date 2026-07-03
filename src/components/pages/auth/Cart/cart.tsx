"use client";
import Link from "next/link";
import GoogleTranslate from "../../common/GoogleTranslate/googleTranslate";
import "./cart.module.css";

export default function Cart() {
    return (
        <div className="cart-wrapper">
            <GoogleTranslate />       
            <Link href="/">
                <div className="header-left">
                    <img src="/group1-removebg-preview.png" alt="Logo" className="header-logo" />
                    <strong className="site-title">Infinity<br /><span className="site-subtitle">Domains</span></strong>
                </div>
            </Link>

            {/* TOP STEP BAR */}
            <div className="cart-steps">
                <div className="step active">
                    ✓ Cart
                    <div className="bar filled"></div>
                </div>

                <div className="step">
                    ✓ Pay
                    <div className="bar"></div>
                </div>

                <div className="step">
                    ✓ Success
                    <div className="bar"></div>
                </div>
            </div>

            <div className="empty-cart">
                <img src="/cart/cart_basket.svg" className="cart-img" />
                <h2>Your Cart is empty</h2>
                <p>Discover, Fill, Enjoy!</p>
                <button className="search-btn">Search Domain</button>
            </div>
        </div>
    );
}
