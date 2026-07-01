"use client";
import Header from "../../Header/header";
import Footer from "../footer";
import "./event.css";
import Link from "next/link";

export default function Event() {
    return (
        <div className="event-page">
            <Header />

            {/* Philosophy Section */}
            <section className="event-section">
                <h1 className="event-title">🧭 Our Philosophy Behind Events</h1>
                <p className="event-text">
                    We believe Web3 shouldn’t be exclusive or confusing – it should be
                    accessible, inspiring, and fun. Our events focus on community-first
                    learning, hands-on experience, and real-world blockchain identity use.
                </p>
            </section>

            {/* Categories Intro */}
            <section className="event-section">
                <h1 className="event-title">🗓️ Our Event Categories</h1>
                <p className="event-text">
                    Infinity Domains champions global decentralized web adoption by enabling
                    on-chain identity access and innovation.
                </p>
            </section>

            {/* Cards Section */}
            <section className="event-cards">

                {/* Card 1 */}
                <div className="event-card">
                    <img src="/banner/web3-identity/Discover.svg" alt="Bootcamps" />
                    <h3>🔹 Bootcamps</h3>
                    <p>
                        Intensive workshops with universities, DAOs, and dev communities.
                        Learn to mint, build, and use domains in dApps.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="event-card">
                    <img src="/banner/web3-identity/Register.png" alt="Hackathons" />
                    <h3>🔹 Hackathons</h3>
                    <p>
                        Collaborative Web3 building marathons. Winning teams often receive
                        funding, exposure, or ecosystem support.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="event-card">
                    <img src="/banner/web3-identity/Trade.svg" alt="Meetups" />
                    <h3>🔹 Community Meetups</h3>
                    <p>
                        Local city meetups connecting founders, creators, and domainers —
                        networking, IRL vibes, and shared growth.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="event-card">
                    <img src="/banner/web3-identity/Manage.svg" alt="Conferences" />
                    <h3>🔹 Global Conferences</h3>
                    <p>
                        Presence at major Web3 stages like Token2049, ETHDubai, Web3Conf,
                        India Devfolio Hackathons.
                    </p>
                </div>

            </section>

            {/* Metrics Table */}
            <section className="event-section">
                <h1 className="event-title">📊 Event Impact Metrics</h1>

                <div className="metrics-table">
                    <div className="metric">
                        <span>Countries Touched</span>
                        <strong>10+</strong>
                    </div>
                    <div className="metric">
                        <span>Total Events</span>
                        <strong>60+</strong>
                    </div>
                    <div className="metric">
                        <span>Students Trained</span>
                        <strong>8,000+</strong>
                    </div>
                    <div className="metric">
                        <span>University Partnerships</span>
                        <strong>30+</strong>
                    </div>
                    <div className="metric">
                        <span>Campus Ambassadors</span>
                        <strong>25+</strong>
                    </div>
                    <div className="metric">
                        <span>Domains Registered</span>
                        <strong>10,000+</strong>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
