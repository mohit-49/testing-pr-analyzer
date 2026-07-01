"use client";
import React, { useState } from "react";
import { Eye, EyeOff, MailPlus, LockKeyhole, LogInIcon, Wallet, } from "lucide-react";
// import "./login.css";
import "./login.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import GoogleTranslate from "../../common/GoogleTranslate/googleTranslate";
import { showWarningToast, showErrorToast, showSuccessToast } from "@/components/pages/common/ToastMessages/toastUtils";
import { injectModels } from "@/components/redux/injectmodels";
import { GoogleLogin } from "@react-oauth/google";
import { API_ENDPOINTS } from "@/components/services/endpoints";
import axios from "axios";

const Login = (props: any) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showWallets, setShowWallets] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s/g, "");
    setEmail(value);
    if (!value) {
      setEmailError("Please enter your email address");
    } else if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setPassword(value);
    if (!value) {
      setPasswordError("Please enter your password");
    } else if (!value) {
      setPasswordError("Password at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      showWarningToast("Please fill all input fields")
      return;
    }

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setPasswordError(
        "Password at least 6 characters"
      );
      return;
    }

    setIsLoading(true);

    try {
      const object = {
        email,
        password,
      };

      const response = await props.auth.login(object);

      if (response?.success) {
        showSuccessToast("Login successfully!")
        setTimeout(() => {
          router.push("/dashboard/userPortfolio");
        }, 1500);
      } else {
        showErrorToast(response?.message || "This email already exists")
      }
    } catch (err: any) {
      showErrorToast(err?.response?.data?.message || "Something went wrong")
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login-wrapper">
      <GoogleTranslate />
      <div className="login-top">
        <Link href="/">
          <div className="header-left">
            <img src="/group1-removebg-preview.png" alt="Logo" className="header-logo" />
            <strong className="site-title">Infinity<br /><span className="site-subtitle">Domains</span></strong>
          </div>
        </Link>
        <div className="login-heading">
          <h2>Login to Your Account</h2>
          <p className="sub-text">
            We’re thrilled to see you again! Please login to your account to continue.
          </p>
        </div>
      </div>
      
      <div className="login-card">
        <div className="login-left">
          <form onSubmit={handleLogin}>
            <div className="input-box">
              <MailPlus color="#51cc00" size={22} />
              <input
                type="email"
                placeholder="Email Your Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            {emailError && <p className="error">{emailError}</p>}

            <div className="input-box">
              <LockKeyhole color="#51cc00" size={22} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <button
                className="pw-toggle"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye color="#51cc00" size={20} style={{ cursor: "pointer" }} /> : <EyeOff color="#51cc00" size={20} style={{ cursor: "pointer" }} />}
              </button>
            </div>
            {passwordError && <p className="error">{passwordError}</p>}

            <button className="login-btn" type="submit" disabled={isLoading}>
              Login
              <LogInIcon size={22} />
            </button>

            <a className="dontaccount" href="/auth/signup">
              Don’t have an account yet? <span>Signup</span>
            </a>

            <a className="forgot" href="/auth/forgotpassword">
              Forgot Password ?
            </a>
            {isLoading && (
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
          </form>
        </div>

        <div className="third-party-login">
          {/* 👇 hidden google original button */}
          <div style={{ display: "none" }}>
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                try {
                  const idToken = credentialResponse.credential;                 
                  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
                  const url = `${BACKEND_URL}${API_ENDPOINTS.GOOGLE_LOGIN}`;
                  const payload = {
                    token: idToken,
                  };
                  const res = await axios.post(url, payload, {
                    headers: {
                      "Content-Type": "application/json",
                    },
                    withCredentials: true,
                  });

                  if (res.data.success) {
                    showSuccessToast("Google login successful");
                    router.push("/dashboard/userPortfolio");
                  }
                } catch (error) {
                  showErrorToast("Google login failed");
                }
              }}
              onError={() => {
                showErrorToast("Google login cancelled");
              }}
              useOneTap={false}
            />
          </div>
          <div
            className="google-btn"
            onClick={() => {
              const btn = document.querySelector(
                'div[role="button"][aria-labelledby]'
              ) as HTMLElement;
              btn?.click();
            }}
          >
            <span className="google-icon-g">G</span>
            Login with Google
          </div>

          {/* wallet section untouched */}
          <div className="wallet-login">
            <button
              className="wallet-main-btn"
              onClick={() => setShowWallets(!showWallets)}
            >
              Login with Wallet
            </button>

            {showWallets && (
              <div className="wallet-options">
                <button className="wallet-option-btn">
                  <Wallet />
                  Login With Multi-Chain Wallet
                  <div className="chain-icons">
                    <img src="/chainslogos/arbitrum-arb-logo.svg" alt="Arb" height="26" />
                    <img src="/chainslogos/bnb-bnb-logo.svg" alt="Bnb" height="26" />
                    <img src="/chainslogos/ethereum-eth-logo.svg" alt="Eth" height="26" />
                    <img src="/chainslogos/polygon-matic-logo.svg" alt="Polygon" height="26" />
                  </div>
                </button>

                <button className="wallet-option-btn">
                  <Wallet />
                  Login With Solana Wallet
                  <img
                    className="solana-logo"
                    src="/chainslogos/solana-sol-logo.svg"
                    alt="Solana"
                    height="26"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default injectModels(["auth"])(Login)

