"use client"
import Link from "next/link";
import "./header.css";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTransition, useState, useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showLoader, setShowLoader] = useState(false);
 
  const handleNav = (url: string) => {
    setShowLoader(true);

    setTimeout(() => {
      startTransition(() => {
        router.push(url);
      });
    }, 2000);
  };

  const pathname = usePathname();
  return (
    <header className="header">
      <Link href="/">
        <div className="header-left">
          <img src="/group1-removebg-preview.png" alt="Logo" className="header-logo" />
          <strong className="site-title">Infinity<br /><span className="site-subtitle">Domains</span></strong>
        </div>
      </Link>

      <nav className="header-center">
        <span className={pathname === "/globalHeader/web3-domains" ? "active-link" : ""} onClick={() => handleNav("/globalHeader/web3-domains")}>Domains</span>
        <span className={pathname === "/globalHeader/market-place" ? "active-link" : ""} onClick={() => handleNav("/globalHeader/market-place")}>Marketplace</span>
        <span className={pathname === "/globalHeader/parked-domains" ? "active-link" : ""} onClick={() => handleNav("/globalHeader/parked-domains")}>Parked Domains</span>
        <span className={pathname === "/globalHeader/blog" ? "active-link" : ""} onClick={() => handleNav("/globalHeader/blog")}>Blog</span>
        <span className={pathname === "/globalHeader/affiliate-program" ? "active-link" : ""} onClick={() => handleNav("/globalHeader/affiliate-program")}>Become an Affiliate</span>
      </nav>

     
      <div className="header-actions">
        <div className="btn auth-btn login-signup-btn">
          <span
            className={pathname === "/auth/login" ? "active-link" : ""}
            onClick={() => handleNav("/auth/login")}
          >
            Login
          </span>

          <span className="divider">/</span>

          <span
            className={pathname === "/auth/signup" ? "active-link" : ""}
            onClick={() => handleNav("/auth/signup")}
          >
            Signup
          </span>
        </div>

        <span
          className={pathname === "/auth/cart" ? "active-link cart-icon" : "cart-icon"}
          onClick={() => handleNav("/auth/cart")}
        >
          <ShoppingCart size={24} />
        </span>
      </div>


      {showLoader && (
        <div className="page-loader">
          <div className="dual-spinner">
            <img
              src="/group1-removebg-preview.png"
              alt="Logo"
              className="loader-logo"
            />
          </div>
        </div>
      )}
    </header>
  );
}
