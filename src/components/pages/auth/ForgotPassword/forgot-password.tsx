"use client"
import React, { useState } from "react";
import Link from "next/link";
import "./forgot-password.css";
import { Send, MailPlus } from "lucide-react";
import GoogleTranslate from "../../common/GoogleTranslate/googleTranslate";
import { useRouter } from "next/navigation";
import { injectModels } from "@/components/redux/injectmodels";
import { showWarningToast, showErrorToast, showSuccessToast } from "@/components/pages/common/ToastMessages/toastUtils";

const ForgotPassword = (props: any) => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [isLoading, setIsLoading] = useState(false);

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

    const handleForgot = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            showWarningToast("Please fill input fields")
            return;
        }
        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address");
            return;
        }
        setIsLoading(true);

        try {
            const object = { email };
            const response = await props.auth.forgot(object);


            if (response?.success) {
                showSuccessToast("Forgot successfully Check your email for verification");
                setTimeout(() => {
                    router.push("/auth/newPassword");
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
        <div className="forgot-container">
            <GoogleTranslate />
            <div className="forgot-top">
                <Link href="/">
                    <div className="header-left">
                        <img src="/group1-removebg-preview.png" alt="Logo" className="header-logo" />
                        <strong className="site-title">Infinity<br /><span className="site-subtitle">Domains</span></strong>
                    </div>
                </Link>

                <div className="forgot-heading">
                    <h1>Forgot your Password?</h1>
                    <p>
                        Forgot your password? No worries, we got you covered. Enter your email
                        address below and we will send you a link to reset your password and get
                        you back on track in no time.
                    </p>
                </div>
            </div>

            <div className="forgot-form">
                <form onSubmit={handleForgot}>
                    <div className="forgot-input-box">
                        <MailPlus color="#51cc00" size={22} />
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={handleEmailChange} />
                    </div>
                    {emailError && <p className="error">{emailError}</p>}

                    <button className="send-btn">
                        Send <Send size={22} />
                    </button>


                    <a href="/auth/login" className="back-login">
                        Back to login
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
        </div>
    );
}
export default injectModels(["auth"])(ForgotPassword)