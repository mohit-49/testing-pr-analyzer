"use client"
import Header from "../header";
import Footer from "../../Footer/footer";
import "./affiliate-program.css";
import React, { useState } from "react";
import GoogleTranslate from "../../common/GoogleTranslate/googleTranslate";

export default function AffiliateProgram() {
    const [showMore, setShowMore] = useState(false);
    const [openAnswers, setOpenAnswers] = useState<Set<number>>(new Set());
    const faqs = [
        {
            question: "How do I become an Infinity Affiliate ?",
            answer:
                "Simply sign up on our website, apply for affiliate access, and wait for approval. Once approved, you’ll receive your dashboard login and referral link.",
        },
        {
            question: "How long does the approval process take ?",
            answer:
                "Our team usually reviews affiliate applications within 24–48 hours. You’ll be notified via email once your account is activated.",
        },
        {
            question: "How much commission can I earn ?",
            answer:
                "You can earn up to 15% commission on every successful domain sale made through your referral link. Top performers may also unlock higher tiers and bonuses.",
        },
        {
            question: "How often are payouts processed ?",
            answer:
                "Affiliate commissions are settled every 1–2 weeks. Automated payouts will be introduced soon to make the process even faster.",
        },
        // Hidden questions
        {
            question: "Where can I find my affiliate link and stats ?",
            answer:
                "Your unique referral link and all performance insights are available in your affiliate dashboard — including clicks, conversions, and earnings.",
        },
        {
            question: "Can I promote Infinity Domains on social media ?",
            answer:
                "Absolutely! You can share your link across Twitter, LinkedIn, YouTube, newsletters, or community spaces — just make sure your promotions follow Infinity branding and guidelines.",
        },
        {
            question: "Are there any eligibility requirements ?",
            answer:
                "Anyone passionate about Web3, digital identity, or domain ownership can apply. Approval is based on authenticity and audience alignment.",
        },
        {
            question: "What if my referral doesn’t complete a purchase right away ?",
            answer:
                "Your referral link includes tracking for 30 days, meaning you’ll still earn a commission if your referred user purchases within that window.",
        },  
             
    ];

    const handleClick = (index: number) => {
        setOpenAnswers((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };
    // Show more button
    const handleShowMore = () => {
        setShowMore(true);
    };

    return (
        <div>
            <Header />
            <GoogleTranslate />
            {/* Part 1 */}
            <section className="affiliate-section">
                <div className="affiliate-hero">
                    <div className="affiliate-left">
                        <p className="badge">Influence. Empower. Earn</p>
                        <h1>Turn influence into <span>Earning?</span></h1>
                        <p className="subtitle">Earn every time your audience takes steps to secure their web3 digital
                            identity through the network you’ve built.</p>
                        <div className="affiliate-buttons">
                            <button className="primary-btn">Get Started</button>
                            <a href="/login" target="_blank" rel="noopener noreferrer"><button className="secondary-btn">Login Here</button></a>
                        </div>
                    </div>
                    <div className="affiliate-right">
                        <img src="/assets/affiliate.png" alt="Affiliate" />
                    </div>
                </div>
                <div className="affiliate-cta">
                    <h1>Be the First. Build the Future.</h1>
                    <p>Join our founding cohort of affiliates and shape how Web3 identity is
                        promoted across the ecosystem</p>
                    <button className="primary-btn">Get Started</button>
                </div>
                <div className="affiliate-cards">
                    <div className="affiliate-card">
                        <img src="/assets/17.png" />
                        <h2>Earn good commission</h2>
                        <p>Earn commission on every sale after discount is applied</p>
                    </div>
                    <div className="affiliate-card">
                        <img src="/assets/20.png" />
                        <h2>10K+</h2>
                        <p>Existing Web3 user base already interacting with Infinity Domains</p>
                    </div>
                    <div className="affiliate-card">
                        <img src="/assets/19.png" />
                        <h2>50+</h2>
                        <p>High-performing campaign materials provided for promotion</p>
                    </div>
                    <div className="affiliate-card">
                        <img src="/assets/18.png" />
                        <h2>Infinity</h2>
                        <p>No earning limits, scale revenue with influence and engagement</p>
                    </div>
                </div>
            </section>

            {/* Part 2 */}
            <section className="how-it-works">
                <div className="how-container">
                    <div className="how-left">
                        <p className="badge">How it works</p>
                        <h1>Start Earning in 4 Simple Clicks</h1>
                        <p className="subtitle">
                            Getting started as an Infinity Domains affiliate is fast and frictionless.
                            Follow four easy steps and start earning from your audience.
                        </p>
                    </div>
                    <div className="how-right">
                        <div className="step-box">
                            <span className="step-number">1</span>
                            <div>
                                <h2>Apply</h2>
                                <p>Submit the affiliate form using your email to begin the onboarding process.</p>
                            </div>
                        </div>
                        <div className="step-box">
                            <span className="step-number">2</span>
                            <div>
                                <h2>Get Approved</h2>
                                <p>Once reviewed, receive approval via email and access to your affiliate dashboard.</p>
                            </div>
                        </div>
                        <div className="step-box">
                            <span className="step-number">3</span>
                            <div>
                                <h2>Access Your Link</h2>
                                <p>Request your affiliate key from the dashboard for admin approval.</p>
                            </div>
                        </div>
                        <div className="step-box">
                            <span className="step-number">4</span>
                            <div>
                                <h2>Share & Earn</h2>
                                <p>Share your link and track every activation and commission in real time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Part 3 */}
            <section className="affiliate-section-two">
                <div className="affiliate-container">
                    <div className="affiliate-header">
                        <h1>Become an Infinity Affiliate</h1>
                        <p>Start earning by empowering your network with Web3 digital identity.</p>
                    </div>
                    <form className="affiliate-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Enter Your Name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Enter Your Email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Create Your Password" />
                        </div>
                        <div className="form-group">
                            <label>Contact</label>
                            <input type="text" placeholder="Enter Your Contact" />
                        </div>
                        <div className="form-group">
                            <label>Location</label>
                            <input type="text" placeholder="Enter Your Location" />
                        </div>
                        <div className="form-group">
                            <label>Existing Communities</label>
                            <input type="text" placeholder="Existing Communities" />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input type="text" placeholder="Describe Your Reach" />
                        </div>
                        <div className="form-group">
                            <label>Past Projects</label>
                            <input type="text" placeholder="Past Projects" />
                        </div>
                        <div className="form-group">
                            <label>LinkedIn Profile</label>
                            <input type="url" placeholder="LinkedIn Profile" />
                        </div>
                        <div className="form-group">
                            <label>X Profile</label>
                            <input type="url" placeholder="X Profile" />
                        </div>
                        <div className="form-group">
                            <label>Telegram</label>
                            <input type="text" placeholder="Telegram community/handle" />
                        </div>
                        <div className="form-group">
                            <label>Other Social Link</label>
                            <input type="url" placeholder="Other Social Link" />
                        </div>
                    </form>
                    <div className="terms">
                        <label className="terms-label">
                            <input type="checkbox" />
                            <span>I agree to the <a href="/terms-and-condition" target="_blank" rel="noopener noreferrer">Terms & Conditions*</a></span>
                        </label>
                    </div>
                    <button className="submit-btn">Register</button>
                </div>
            </section>

            {/* Part 4 */}
            <section className="faq-section">
                <h1 className="faq-title">Frequently Asked Questions</h1>
                <div className="faq-list">
                    {faqs.map((faq, idx) => {
                        if (!showMore && idx >= 4) return null;
                        const isOpen = openAnswers.has(idx);
                        return (
                            <div
                                className={`faq-item ${isOpen ? "show-answer" : ""}`}
                                key={idx}
                            >
                                <p className="faq-question" onClick={() => handleClick(idx)}>
                                    {faq.question}
                                    <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                                </p>

                                <span className="faq-answer">{faq.answer}</span>
                            </div>
                        );
                    })}
                </div>
                {!showMore && (
                    <button className="faq-show-more" onClick={handleShowMore}>
                        Show More
                    </button>
                )}
            </section>

            <Footer />
        </div>
    );
}
