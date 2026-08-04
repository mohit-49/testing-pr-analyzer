"use client";
import Header from "../../Header/header";
import Footer from "../footer";
import "./privacy-policy.css";

export default function PrivacyPolicy() {
  return (
    <div>
      <Header />

      <div className="policy-page">

        {/* Title */}
        <h1 className="policy-title">Privacy Policy</h1>
        <hr className="policy-divider" />

        {/* Introduction */}
        <section className="policy-section">
          <h2>Introduction</h2>
          <p>
            Your privacy is important to us. This Privacy Notice explains how
            Infinity Domains Limited collects, stores, and uses your personal
            data when you interact with our website{" "}
            <a href="#" className="policy-link">infinitydomains</a>.
            
          </p>
          <p>
            If you have any questions, contact us at{" "}
            <a href="mailto:support@infinitydomains" className="policy-link">
              support@infinitydomains
            </a>.
            if you have any questions about how we collect, store, or use your personal data, or about this Privacy Notice in general.
          </p>
        </section>

        {/* Data Collection */}
        <section className="policy-section">
          <h2>How do we collect your personal data?</h2>
          <p>We collect personal data when you:</p>

          <ul>
            <li>Use our website or parked domains</li>
            <li>Interact with customer support</li>
            <li>Participate in pre-launch activities</li>
            <li>Create an account or sign up for samples</li>
            <li>Fill feedback forms or questionnaires</li>
            <li>Make purchases or transactions</li>
            <li>Enter payment details</li>
            <li>Click ads or links</li>
            <li>Receive marketing communications</li>
          </ul>

          <p>
            We may also receive data from trusted third parties or public sources,
            only when consent has been provided.
          </p>
        </section>

        {/* Purpose */}
        <section className="policy-section">
          <h2>What information do we collect & why?</h2>
          <p>We use personal data for:</p>

          <ul>
            <li>Administrative & support purposes</li>
            <li>Improving website performance</li>
            <li>Marketing & promotions</li>
            <li>Customer insights & analytics</li>
            <li>Fraud detection & prevention</li>
            <li>Legal obligations</li>
            <li>Strategic planning</li>
          </ul>

          <p>
            Processing is based on consent, contractual necessity, or legitimate
            interests, always balanced with your rights.
          </p>
        </section>

        {/* Information */}
        <section className="policy-section">
          <h2>Information we collect</h2>
          <p>
            When you sign up, we collect your email address to share updates,
            promotions, and product launches. You can unsubscribe anytime.
          </p>

          <h2>Your user information</h2>
          <p>
            We collect non-identifiable usage data such as IP address, browser
            type, and pages visited to improve user experience.
          </p>
        </section>

        {/* Marketing */}
        <section className="policy-section">
          <h2>Marketing & Communication</h2>
          <p>
            We only send marketing emails with your explicit consent. You may opt
            out anytime by contacting{" "}
            <a href="mailto:support@infinitydomains" className="policy-link">
              support@infinitydomains
            </a>.
          </p>
        </section>

        {/* Logs */}
        <section className="policy-section">
          <h2>Log Files</h2>
          <p>
            Like most websites, we use log files to analyze trends, administer
            the site, and track usage. This data is not personally identifiable.
          </p>
        </section>

      </div>

      <Footer />
    </div>
  );
}
