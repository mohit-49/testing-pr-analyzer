"use client";
import Header from "../../Header/header";
import Footer from "../footer";
import "./about-us.css";

export default function AboutUs() {
    return (
        <div className="about-us-wrapper">
            <Header />

            {/* Welcome Section */}
            <section className="section-part">
                <h1>Welcome to Infinity Domains</h1>
                <p>
                    At Infinity, we are not just a Web3 digital identity provider, but a
                    decentralized identity ecosystem, built for everyone who wants to own
                    their digital presence from creators, developers to brands and
                    dreamers. Our platform is secure, scalable and created with vision of
                    user-first internet.
                </p>
            </section>

            {/* Our Journey Section */}
            <section className="section-part">
                <h1>Our Journey</h1>
                <p>
                    Infinity started with the vision of creating easy access to web3
                    identity. We evolved from an experiment to a fast growing platform
                    spread across 30+ countries, hundreds of domain traders and a thriving
                    community of builders.
                </p>
            </section><br /><br />

            {/* What We Have For You Cards */}
            <section>
                <h1>What we have for you</h1>
                <div className="cards-container">
                    <span className="card">$2 web3 digital identities</span>
                    <span className="card">No Renewal Fees</span>
                    <span className="card">Marketplace</span>
                    <span className="card">Wallet Integration</span>
                    <span className="card">Events & Bootcamps</span>
                    <span className="card">Community Rewards</span>
                </div>
            </section><br /><br />


            {/* Our Ecosystem & Community Section */}
            <section className="ecosystem-community">
                <div className="eco-card">
                    <h1>Our ecosystem</h1>
                    <ul>
                        <li>InfinityDomains Core: Domain buying, selling & identity linking</li>
                        <li>ED Marketplace: Peer-to-peer domain trading platform</li>
                        <li>MyW3Magic: Community & learning initiative powered by InfinityDomains</li>
                        <li>ID Tools: Coming soon – domain analytics, name valuation AI, and portfolio tools</li>
                    </ul>
                </div>

                <div className="eco-card">
                    <h1>Our community</h1>
                    <ul>
                        <li>5,000+ community members (Discord + Events)</li>
                        <li>80+ Universities Covered</li>
                        <li>Partnered with top tech clubs & Web3 orgs</li>
                    </ul>
                </div>
            </section>


            {/* Meet The Team Section */}
            <section>
                <h1>Meet the Team</h1>

                <p className="para-founders">Founders</p>
                <div className="cards-container">
                    <div className="user-card">
                        <img
                            src="/partners/avatar.png"
                            alt="Vicky Hissaria"
                            className="user-image"
                        />
                        <h3>Mohit Sharma</h3>
                        <p>CEO / Founder</p>
                        <a href="/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                            LinkedIn
                        </a>
                    </div>

                    <div className="user-card">
                        <img
                            src="/partners/avatar1.png"
                            alt="Ankit Agarwal"
                            className="user-image"
                        />
                        <h3>Ankit Agarwal</h3>
                        <p>Co-Founder</p>
                        <a href="/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                            LinkedIn
                        </a>
                    </div>
                </div><br />

                <p className="para-founders">Core Team Members</p>
                <div className="cards-container">
                    <div className="user-card">
                        <img src="/partners/avatar2.png" alt="User 1" className="user-image" />
                        <h3>Shivam Arora</h3>
                        <p>Growth Head</p>
                        <a href="/" className="linkedin-link">
                            LinkedIn
                        </a>
                    </div>

                    <div className="user-card">
                        <img src="/partners/avatar3.png" alt="User 2" className="user-image" />
                        <h3>Pallavi Patodia</h3>
                        <p>Digital Media Manager</p>
                        <a href="/" className="linkedin-link">
                            LinkedIn
                        </a>
                    </div>

                     <div className="user-card">
                        <img src="/partners/avatar5.png" alt="User 1" className="user-image" />
                        <h3>Taniya Mittal</h3>
                        <p>SEO</p>
                        <a href="/" className="linkedin-link">
                            LinkedIn
                        </a>
                    </div>
                </div><br />

                <p className="para-founders">Our Team</p>
                <div className="cards-container">
                    <div className="user-card">
                        <img src="/partners/avatar4.png" alt="User 1" className="user-image" />
                        <h3>Mohit Agarwal</h3>
                        <p>Project Manager</p>
                        <a href="/" className="linkedin-link">
                            LinkedIn
                        </a>
                    </div>


                    <div className="user-card">
                        <img src="/partners/avatar5.png" alt="User 1" className="user-image" />
                        <h3>Nancy Garg</h3>
                        <p>Business Development Executive</p>
                        <a href="/" className="linkedin-link">
                            LinkedIn
                        </a>
                    </div>

                    <div className="cards-container">
                        <div className="user-card">
                            <img src="/partners/avatar6.png" alt="User 1" className="user-image" />
                            <h3>Namrata Khurana</h3>
                            <p>Business Development Executive</p>
                            <a href="/" className="linkedin-link">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="user-card">
                        <img src="/partners/avatar7.png" alt="User 1" className="user-image" />
                        <h3>Himanshu Sachan</h3>
                        <p>Web3 Marketing</p>
                        <a href="/" className="linkedin-link">
                            LinkedIn
                        </a>
                    </div>


                    <div className="user-card">
                        <img src="/partners/avatar1.png" alt="User 1" className="user-image" />
                        <h3>Rahul Sodhi</h3>
                        <p>Social Media Manager</p>
                        <a href="/" className="linkedin-link">
                            LinkedIn
                        </a>
                    </div>


                    <div className="user-card">
                        <img src="/partners/avatar2.png" alt="User 1" className="user-image" />
                        <h3>Smriti Singh</h3>
                        <p>Developer</p>
                        <a href="/" className="linkedin-link">
                            LinkedIn
                        </a>
                    </div>


                    <div className="user-card">
                        <img src="/partners/avatar3.png" alt="User 1" className="user-image" />
                        <h3>Jay Saadana</h3>
                        <p>Developer Relation</p>
                        <a href="/" className="linkedin-link">
                            LinkedIn
                        </a>
                    </div>

                    <div className="user-card">
                        <img src="/partners/avatar4.png" alt="User 1" className="user-image" />
                        <h3>Bhavuk Kathuria</h3>
                        <p>Graphic Designer</p>
                        <a href="/" className="linkedin-link">
                            LinkedIn
                        </a>
                    </div>

                </div><br/>
            </section>

            <Footer />
        </div>
    );
}
