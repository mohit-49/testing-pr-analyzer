"use client";
import React, { useState } from "react";
import { Eye, EyeOff, LockKeyhole } from "lucide-react";
import "./new-password.css";
import Link from "next/link";
import GoogleTranslate from "../../common/GoogleTranslate/googleTranslate";
import { showWarningToast, showErrorToast, showSuccessToast } from "@/components/pages/common/ToastMessages/toastUtils";
import { useRouter } from "next/navigation";
import { injectModels } from "@/components/redux/injectmodels";

const NewPassword = (props: any) => {
  const router = useRouter();

  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setNewPassword(value);
    if (!value) {
      setNewPasswordError("Please enter your password");
    } else if (!value) {
      setNewPasswordError("Password at least 6 characters");
    } else {
      setNewPasswordError("");
    }
  };
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setConfirmPassword(value);
    if (!value) {
      setConfirmPasswordError("Please enter your password");
    } else if (!value) {
      setConfirmPasswordError("Password at least 6 characters");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      showWarningToast("Please fill all input fields")
      return;
    }
    if (!newPassword) {
      setNewPassword("Password at least 6 characters");
      return;
    }
    if (!confirmPassword) {
      setNewPassword("Password at least 6 characters");
      return;
    }
    if (newPassword !== confirmPassword) {
      showWarningToast("Passwords do not match")
    }
    setIsLoading(true);

    try {
      const object = { newPassword, };
      const response = await props.auth.reset(object);
      if (response?.success) {
        showSuccessToast("Reset successfully");
        setTimeout(() => {
          router.push("/");
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
    <div className="password-wrapper">
      <GoogleTranslate />

      <div className="password-top">
        <Link href="/">
          <div className="header-left">
            <img src="/group1-removebg-preview.png" alt="Logo" className="header-logo" />
            <strong className="site-title">Infinity<br /><span className="site-subtitle">Domains</span></strong>
          </div>
        </Link>

        <div className="password-heading">
          <h2>Change Your Password</h2>
          <p className="sub-text">
            Create a strong new password to keep your account secure
          </p>
        </div>
      </div>

      <div className="password-card">
        <div className="password-form">
          <form onSubmit={handleReset}>
            <div className="input-box">
              <LockKeyhole color="#51cc00" size={22} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={handleNewPasswordChange}
              />
              <button
                className="pw-toggle"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye color="#51cc00" size={20} style={{ cursor: "pointer" }} /> : <EyeOff color="#51cc00" size={20} style={{ cursor: "pointer" }} />}
              </button>
            </div>
              {newPasswordError && <p className="error">{newPasswordError}</p>}

            <div className="input-box">
              <LockKeyhole color="#51cc00" size={22} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <button
                className="pw-toggle"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye color="#51cc00" size={20} style={{ cursor: "pointer" }} /> : <EyeOff color="#51cc00" size={20} style={{ cursor: "pointer" }} />}
              </button>
            </div>
            {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}

            <button className="password-btn" type="submit" disabled={isLoading}>
              Save Password
            </button>
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
      </div>
    </div>
  );
};
export default injectModels(["auth"])(NewPassword)
