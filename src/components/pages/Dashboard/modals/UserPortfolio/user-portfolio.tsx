"use client";
import "./user-portfolio.css";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Package, BarChart3, Network, ShoppingCart, ChevronUp, Settings, Globe, LogOut } from "lucide-react";
import Home from "@/app/page";
import { injectModels } from "@/components/redux/injectmodels";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
import AccountSettingsModal from "../AccountSettingsModal/AccountSettingsModal";
import LogoutConfirmModal from "../LogoutModel/logout";

const UserPortfolio = (props: any) => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const [settingsOpen, setSettingsOpen] = useState(false);

  const [profile, setProfile] = useState<any>(null);
  const [loadingProfile, setLoadingProfile] = useState(false);

  const [logoutOpen, setLogoutOpen] = useState(false);

  const fetchUserProfile = async () => {
    setLoadingProfile(true);
    const response = await props.auth.getUser();
    if (response?.success) {
      setProfile(response.data);
    }
    setLoadingProfile(false);
  };

  useEffect(() => {
    if (settingsOpen) {
      fetchUserProfile();
    }
  }, [settingsOpen]);

  const avatarUrl = profile?.avatar ? `${BACKEND_URL}/${profile.avatar}` : "/users/avatar.png";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <>
      <div className="portfolio">
        <Link href="/">
          <div className="portfolio-left">
            <img src="/group1-removebg-preview.png" alt="Logo" className="portfolio-logo" />
            <strong className="site-title">Infinity <br /><span className="site-subtitle">Domains</span></strong>
          </div>
        </Link>
        <nav className="portfolio-center">
          <Link href="/globalHeader/web3-domains" className={pathname === "/globalHeader/web3-domains" ? "active-link" : ""}>Domains</Link>
          <Link href="/globalHeader/market-place" className={pathname === "/globalHeader/market-place" ? "active-link" : ""}>Marketplace</Link>
          <Link href="/globalHeader/parked-domains" className={pathname === "/globalHeader/parked-domains" ? "active-link" : ""}>Parked Domains</Link>
          <Link href="/globalHeader/blog" className={pathname === "/globalHeader/blog" ? "active-link" : ""}>Blog</Link>
          <Link href="/globalHeader/affiliate-program" className={pathname === "/globalHeader/affiliate-program" ? "active-link" : ""}>Become an Affiliate</Link>
        </nav>

        <div className="portfolio-right">
          <div
            className="btn auth-btn login-signup-btn"
            onClick={() => setOpen(!open)}
          >
            <span className="account-toggle">
              Account <ChevronUp size={20} className={open ? "rotate" : ""} />
            </span>
          </div>
          {open && (
            <div className="account-modal" ref={modalRef}>
              <div className="account-user">
                {/* <User size={32} /> */}
                <img
                  src={avatarUrl}
                  className="avatar-preview"
                  alt="User Avatar"
                />

                <div>
                  <p className="user-name">{profile?.name || ""} </p>
                  <p className="user-email">{profile?.email || ""}</p>
                </div>
              </div>
              <hr />
              <div className="account-item" onClick={() => { setSettingsOpen(true); setOpen(false); }}>
                <Settings size={18} />
                <span>Account Settings</span>
              </div>

              <div className="account-item"><Globe size={18} /><span>My Domains</span></div>
              <div className="account-item"><Package size={18} /><span>My Order</span></div>
              <div className="account-item"><Network size={18} /><span>Affiliate Dashboard</span></div>
              <div className="account-item"><BarChart3 size={18} /><span>Analytics</span></div>
              <hr />
              <div className="account-item logout" onClick={() => {setLogoutOpen(true); setOpen(false);}}>
                <LogOut size={18} />
                <span>Sign Out</span>
              </div>
            </div>
          )}
        </div>

        <div>
          <Link href="/cart">
            <ShoppingCart size={26} className="cart-icon" />
          </Link>
        </div>
      </div>

      <Home hideHeader />
      <AccountSettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        profile={profile}
        setProfile={setProfile}
        loadingProfile={loadingProfile}
      />
      <LogoutConfirmModal
        open={logoutOpen}
        onClose={() => setLogoutOpen(false)}
      />
    </>
  );
}
export default injectModels(["auth"])(UserPortfolio)