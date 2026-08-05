"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { injectModels } from "@/components/redux/injectmodels";
import { Eye, EyeOff, MailPlus, LockKeyhole, UserPlus, User, Wallet, ShieldCheck } from "lucide-react";
import "./register.css";
import Link from "next/link";
import GoogleTranslate from "../../common/GoogleTranslate/googleTranslate";
import { showWarningToast, showErrorToast, showSuccessToast } from "@/components/pages/common/ToastMessages/toastUtils";
import { GoogleLogin } from "@react-oauth/google";
import { API_ENDPOINTS } from "@/components/services/endpoints";
import axios from "axios";

const Register = (props: any) => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [role, setRole] = useState("");
  const [roleError, setRoleError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showWallets, setShowWallets] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    if (!value) {
      setNameError("Please enter your name")
    } else {
      setNameError("")
    }
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setRole(value);
    if (!value) {
      setRoleError("Please enter your user role")
    } else {
      setRoleError("")
    }
  };

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

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Empty fields check
    if (!name || !role || !email || !password) {
      showWarningToast("Please fill all input fields")
      return;
    }

    // 2. Validation
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setPasswordError("Password at least 6 characters");
      return;
    }

    setIsLoading(true);

    try {
      const object = { name, role, email, password, };
      const response = await props.auth.register(object);

      // 3. Backend message handling
      if (response?.success) {
        showSuccessToast("Registered successfully Check your email for verification");
        setTimeout(() => {
          router.push("/auth/login");
        }, 1500);
      } else {
        showErrorToast("This email already exists")
      }
    } catch (err: any) {
      showErrorToast("Something went wrong")
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-wrapper">
      <GoogleTranslate />
      <div className="register-top">
        <Link href="/">
          <div className="header-left">
            <img src="/group1-removebg-preview.png" alt="Logo" className="header-logo" />
            <strong className="site-title">Infinity<br /><span className="site-subtitle">Domains</span></strong>
          </div>
        </Link>
        <div className="register-heading">
          <h2>Continue Your Journey with Infinity Domains</h2>
          <p className="sub-text">Securely log in to continue managing your domains, purchases, and account settings.</p>
        </div>
      </div>

      <div className="register-card">
        <div className="register-left">
          <form onSubmit={handleRegister}>
            <div className="input-box">
              <User color="#51cc00" size={22} />
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={handleNameChange} />
            </div>
            {nameError && <p className="error">{nameError}</p>}

            <div className="input-box">
              <MailPlus color="#51cc00" size={22} />
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={handleEmailChange} />
            </div>
            {emailError && <p className="error">{emailError}</p>}

            <div className="input-box">
              <LockKeyhole color="#51cc00" size={22} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                value={password}
                onChange={handlePasswordChange} />
              <button className="pw-toggle" type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <Eye color="#51cc00" size={20} style={{ cursor: "pointer" }} /> : <EyeOff color="#51cc00" size={20} style={{ cursor: "pointer" }}/>}</button>
            </div>
            {passwordError && <p className="error">{passwordError}</p>}

            <div className="input-box">
              <ShieldCheck color="#51cc00" size={22} />
              <input
                type="text"
                placeholder="Enter Your Role"
                value={role}
                onChange={handleRoleChange} />
            </div>
            {roleError && <p className="error">{roleError}</p>}
        
            <button className="register-btn" type="submit" disabled={isLoading}>
              Create Account
              <UserPlus size={22} />
            </button>

            <a className="alreadyaccount" href="/auth/login">Already Have An Account? <span>Login Now</span></a>
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

          <div className="wallet-login">
            <button className="wallet-main-btn" onClick={() => setShowWallets(!showWallets)}>
              SigIn with Wallet
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
                  <img className="solana-logo" src="/chainslogos/solana-sol-logo.svg" alt="Solana" height="26" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

}
export default injectModels(["auth"])(Register)