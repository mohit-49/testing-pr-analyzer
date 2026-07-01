"use client";
import Header from "../../Header/header";
import Footer from "../footer";
import "./vision-mission.css";

export default function VisionMission() {
  return (
    <div>
      <Header />

      <div className="vm-container">

        {/* Vision */}
        <h1 className="vm-title">🌟 Vision Statement</h1>
        <p className="vm-text">
          To empower every individual with true ownership of their digital identity through decentralized,
          affordable, and accessible web3 digital identities. We envision a future where everyone — from
          creators and developers to students and entrepreneurs — can control their online presence without
          relying on centralized systems.<br/><br/> <span className="para-bold">Infinity Domains </span> aims to be the gateway to this future, where
          digital names are more than just addresses — they’re personal brands, secure identities, and
          powerful tools for connection.
        </p><br/>

        {/* Mission */}
        <h1 className="vm-title">🚀 Mission Statement</h1>
        <p className="vm-text">
          To build the most inclusive, community-powered Web3 digital identity platform that offers
          affordable domains, a thriving marketplace, educational access, and real-world utility — all under
          one roof. We aim to simplify the journey into Web3 by making domain ownership intuitive, meaningful,
          and rewarding.<br/><br/>  By fostering innovation and collaboration, we’re creating a space where anyone can
          build, belong, and thrive in the decentralized internet.
        </p>

        {/* Cards Section */}
        <h1 className="section-heading">How we achieve this:</h1>

        <div className="vm-cards">

          <div className="vm-card">
            <h3>💲 Affordable Access</h3>
            <span>Starting web3 digital identities at just $2 — no renewals, full ownership.</span>
          </div>

          <div className="vm-card">
            <h3>🛒 One-Stop Marketplace</h3>
            <span>Buy, sell, and trade domains with ease and transparency.</span>
          </div>

          <div className="vm-card">
            <h3>🎓 Education First</h3>
            <span>Bootcamps, workshops, and student programs to onboard the next million users.</span>
          </div>

          <div className="vm-card">
            <h3>🤝 Community-Led Growth</h3>
            <span>Rewards and recognition for contributors, ambassadors, and developers.</span>
          </div>

          <div className="vm-card">
            <h3>🧰 Innovation Tools</h3>
            <span>Tools for domain utilities across wallets, websites, and dApps.</span>
          </div>

          <div className="vm-card">
            <h3>🌍 Global Reach, Local Roots</h3>
            <span>From global summits to university clubs — engagement at every level.</span>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}
