"use client"
import Header from "../header";
import Footer from "../../Footer/footer";
import "./parked-domains.css";
import React, { useState } from "react";
import { Search } from "lucide-react";
import GoogleTranslate from "../../common/GoogleTranslate/googleTranslate";

export default function ParkedDomains() {
    const [showMore, setShowMore] = useState(false);
    const [openAnswers, setOpenAnswers] = useState<Set<number>>(new Set());
    const faqs = [
        {
            question: "Can I purchase a parked domain name ?",
            answer:
                "Yes, you can purchase a parked domain name. You will need to contact the Web3 digital identity owner to negotiate a sale or look up the domain name in our Marketplace.",
        },
        {
            question: "How many domain names can I park and for how long ?",
            answer:
                "You can park an unlimited number of domains on Infinity Domains. The length of time that you can park a domain varies, but it is typically one year or more.",
        },
        {
            question: "How do I unpark a parked domain ?",
            answer:
                "To unpack a parked domain, you will need to log in to your Infinity Domains account and change the settings for the domain name. For further assistance, reach out to us at support@infinitydomains.io.",
        },
        {
            question: "Are there any additional cost associated with domain parking ?",
            answer:
                "Yes, you will be charged a small amount of gas fees to publish your parked domain content on IPFS decentralized hosting.",
        },
        // Hidden questions
        {
            question: "What happens if I don't renew my parked domain ?",
            answer:
                "If you do not renew your renewable parked domain, it will expire and become available for registration by someone else. You will lose any revenue that you were generating from the domain.",
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
            <section className="parked-domain">
                <div className="parked-content">
                    <div className="parked-text">
                        <h1>What is a Parked Domain?</h1>
                        <p>A parked domain is a registered but unused domain name. It can be used for generating income through ads,
                            safeguarding the domain name for future resale, or redirecting traffic to another site to boost brand
                            visibility.</p>
                    </div>
                    <div className="parked-image">
                        <img src="/banner/parked-domains/parked_domains.png" alt="Parked Domains" />
                    </div>
                </div>
            </section>

            {/* Part 2 */}
            <section className="park-domain-section">
                <div className="park-domain-wrapper">
                    <div className="park-left">
                        <img src="/banner/parked-domains/template-1.png" alt="Parked Domain" />
                    </div>
                    <div className="park-right">
                        <p className="small-title">Park your domains</p>
                        <h2>Infinity Domains. Swift. Secure. Trusted.</h2>
                        <p className="steps-title">Park your domain in 3 simple steps.</p>
                        <div className="steps">
                            <div className="step-item">
                                <img src="/banner/parked-domains/box.svg" />
                                <p>Register your domain name</p>
                                <div className="hover-box">
                                    <img src="/banner/parked-domains/register.jpg" />
                                    <p>Search your desired domain, select if available, and proceed to checkout.</p>
                                </div>
                            </div>
                            <div className="step-item">
                                <img src="/banner/parked-domains/sliders.svg" />
                                <p>Set up your domain parking</p>
                                <div className="hover-box">
                                    <img src="/banner/parked-domains/setup.jpg" />
                                    <p>Configure parking settings and enable monetization or redirection.</p>
                                </div>
                            </div>
                            <div className="step-item">
                                <img src="/banner/parked-domains/edit.svg" />
                                <p>Customize your parked domain</p>
                                <div className="hover-box">
                                    <img src="/banner/parked-domains/setup.jpg" />
                                    <p>Go to “My Account,” then “My Domains,” and manage your parked content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Part 3 */}
            <section className="template-section">
                <div className="template-heading">
                    <h1>Custom Parked Domain Template</h1>
                    <p>Create a high-profile parked domain and monetise it.</p>
                </div>
                <div className="marquee-wrapper">
                    <div className="marquee-track">
                        <img src="/banner/parked-domains/template-1.png" />
                        <img src="/banner/parked-domains/template-2.png" />
                        <img src="/banner/parked-domains/template-3.png" />
                        <img src="/banner/parked-domains/template-4.png" />
                    </div>
                </div>
            </section>


            {/* Part 4 */}
            <section className="why-park-section">
                <div className="why-park-wrapper">
                    <h1 className="why-park-heading">Why Park a Web3 Digital Identity?</h1>
                    <div className="why-park-grid">
                        <div className="why-park-item">
                            <img src="/banner/parked-domains/monetization.svg" />
                            <h2>Monetization</h2>
                            <p>Earn revenue by collecting commissions from clicks on ads or affiliate
                                links shown on your parked web3 digital identities.</p>
                        </div>
                        <div className="why-park-item">
                            <img src="/banner/parked-domains/reservation.svg" />
                            <h2>Domain Reservation</h2>
                            <p>Protect and maintain ownership of valuable domains, keeping them safe from being taken by others.</p>
                        </div>
                        <div className="why-park-item">
                            <img src="/banner/parked-domains/drive.svg" />
                            <h2>Drive Traffic</h2>
                            <p>Boost your domain’s visibility, attract potential buyers, and increase resale potential.</p>
                        </div>
                        <div className="why-park-item">
                            <img src="/banner/parked-domains/speculation.svg" />
                            <h2>Domain Speculation</h2>
                            <p>Identify and acquire Web3 digital identity names with strong future value.</p>
                        </div>
                        <div className="why-park-item">
                            <img src="/banner/parked-domains/future.svg" />
                            <h2>Future Development</h2>
                            <p>Purchase and hold premium domain names for your future projects.</p>
                        </div>
                        <div className="why-park-item">
                            <img src="/banner/parked-domains/traffic.svg" />
                            <h2>Redirects and Branding</h2>
                            <p>Redirect traffic to live sites while maintaining consistent branding.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Part 5 */}
            <section className="domain-parking-section">
                <div className="domain-parking-wrapper">
                    <h1 className="domain-parking-heading">How Domain Parking Works</h1>
                    <div className="domain-parking-content">
                        <div className="domain-parking-image">
                            <img
                                src="/banner/parked-domains/domain_parking.png"
                                alt="Domain Parking"
                            />
                        </div>
                        <div className="domain-parking-text">
                            <p>
                                Domain parking lets you keep your web3 digital identities active while
                                safeguarding them from being claimed by others. Even if you’re not
                                ready to build a full website, parking ensures your digital real estate
                                remains secure and visible online.
                                <br /><br />
                                By redirecting your domain to a custom page with advertisements or
                                relevant information, you can generate passive income from visitor
                                clicks. The ads can come from various Web3 projects and platforms,
                                giving you a way to monetise unused domains while maintaining your
                                brand presence and future opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Part 6 */}
            <section>
                <div className="testimonial-section">
                    <h2>Customer Experiences</h2>
                    <div className="testimonial-marquee">
                        <div className="testimonial-card">
                            <div className="stars-and-img">
                                <div className="stars">
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                </div>
                                <img src="/domain/testimonial.svg" alt="Testimonial Icon" className="testimonial-icon" />
                            </div>
                            <p className="testimonial-text">I needed a personalized NFT address, and Infinity Domains delivered perfectly. Buying my NFT address through them was quick and easy. Now, I have a unique and memorable address for all my NFT transact....</p>
                            <p className="testimonial-name">Mohit Sharma</p>
                            <span className="testimonial-role">Full Stack Developer</span>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars-and-img">
                                <div className="stars">
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                </div>
                                <img src="/domain/testimonial.svg" alt="Testimonial Icon" className="testimonial-icon" />
                            </div>
                            <p className="testimonial-text">Buying my Web3 domain through Infinity Domains was incredibly easy. Using my credit card for the purchase was seamless and hassle-free. If you're looking for a straightforward way to get your Web3 dom....</p>
                            <p className="testimonial-name">Mohit Sharma</p>
                            <span className="testimonial-role">Full Stack Developer</span>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars-and-img">
                                <div className="stars">
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                </div>
                                <img src="/domain/testimonial.svg" alt="Testimonial Icon" className="testimonial-icon" />
                            </div>
                            <p className="testimonial-text">I highly recommend Infinity Domains for anyone looking to enter the Web 3 space. They offer a seamless experience and a wide array of domain options to choose from.</p>
                            <p className="testimonial-name">Mohit Sharma</p>
                            <span className="testimonial-role">Full Stack Developer</span>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars-and-img">
                                <div className="stars">
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                </div>
                                <img src="/domain/testimonial.svg" alt="Testimonial Icon" className="testimonial-icon" />
                            </div>
                            <p className="testimonial-text">Purchasing my Web3 domain from Infinity Domains gave me an added sense of security. The platform ensures that my transactions and digital identity are safe. It's a reliable and secure way to step into....</p>
                            <p className="testimonial-name">Mohit Sharma</p>
                            <span className="testimonial-role">Full Stack Developer</span>
                        </div>
                        <div className="testimonial-card">
                            <div className="stars-and-img">
                                <div className="stars">
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                    <img src="/domain/star.svg" alt="Star" />
                                </div>
                                <img src="/domain/testimonial.svg" alt="Testimonial Icon" className="testimonial-icon" />
                            </div>
                            <p className="testimonial-text">I spent hours searching for the perfect TLD, and Infinity Domains made it incredibly convenient. Their vast range of options allowed me to compare and choose the best Web3 domain that fit my needs.</p>
                            <p className="testimonial-name">Mohit Sharma</p>
                            <span className="testimonial-role">Full Stack Developer</span>
                        </div>
                    </div>
                </div>
            </section>
            <hr />

            {/* Part 7 */}
            <section className="faq-section">
                <h1 className="faq-title">Frequently Asked Questions for Web3 Digital Identity</h1>
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

            {/* Part 8 */}
            <section className="cta-section">
                <div className="cta-wrapper">
                    <h1>Don’t miss your chance!</h1>
                    <p>Build a unique online identity with blockchain-powered domains.</p>

                    <div className="cta-search">
                        <input type="text" placeholder="Search your domain" />
                        <Search size={20} />
                    </div>
                </div>
            </section>




            <Footer />
        </div>
    );
}
