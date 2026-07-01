"use client";
import Header from "../../Header/header";
import Footer from "../footer";
import "./community.css";

export default function Community() {
  return (
    <div>
      <Header />

      <div className="about-container">

        <h1 className="title">🌀 Welcome to the Infinity Community</h1>
        <p className="text">
          At Infinity Domains, we believe the internet belongs to the people. That’s why we’ve built more than
          just a domain platform — we’ve built a movement.
        </p>

        <h2 className="section-title">💬 Who’s Here?</h2>
        <ul className="list">
          <li>🌍 Domainers – Owning and trading identities on-chain</li>
          <li>🧠 Developers – Building dApps, wallets, and tools</li>
          <li>📣 Educators – Spreading Web3 identity awareness</li>
          <li>🧑‍🎓 Students – Leading Web3 clubs</li>
          <li>✨ Creators & Designers – Using identities as portfolios & brands</li>
        </ul>

        <h2 className="section-title">⭐ Why Join?</h2>
        <ul className="list">
          <li>🤝 Inclusive — No gatekeeping</li>
          <li>🧠 Knowledge-driven learning</li>
          <li>💼 Internships, grants & gigs</li>
          <li>🎁 Earn XP, NFTs & early access</li>
        </ul>

        <h2 className="section-title">🌐 How You Can Join & Contribute</h2>
        <ul className="list">
          <li>Join Discord — AMAs, giveaways, dev help</li>
          <li>Attend Bootcamps & Events</li>
          <li>Earn XP through blogs, referrals & workshops</li>
          <li>💎 Redeem perks, NFTs & beta access</li>
        </ul>

        <h2 className="section-title">📸 Community in Action</h2>

        <div className="cards">
          <div className="card">
            <h3>Campus Workshop</h3>
            <p>“This was my first time speaking on Web3 – thanks to Infinity!”</p>
            <span>— Kriti</span>
          </div>

          <div className="card">
            <h3>Hackathon Booth</h3>
            <p>“Won my first hackathon using an ED domain!”</p>
            <span>— Rohit</span>
          </div>
        </div>

        <h2 className="section-title">🛠️ Built With the Community</h2>
        <p className="text">
          Many of our features and ideas come directly from community feedback.
        </p>
        <ul className="list">
          <li>🎨 UI mockups from students</li>
          <li>✍️ Domain use-case articles</li>
          <li>🐞 Open-source bug fixes & tools</li>
        </ul>

        <h2 className="section-title">🤝 Partner With Us</h2>
        <p className="text">
          Are you a DAO, student club, hackathon team, or startup community?  
          Contact us at <strong>support@infinitydomains</strong>
        </p>

        <h2 className="section-title">💭 Final Note</h2>
        <p className="text">
          Infinity Domains isn’t just about names — it’s about people.
        </p>

        <div className="button-group">
          <button className="primary-btn">Join the Community</button>
          <button className="secondary-btn">Follow on Twitter</button>
          <button className="secondary-btn">Read Blog</button>
        </div>

      </div>

      <Footer />
    </div>
  );
}
