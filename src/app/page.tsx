"use client"
import Header from "@/components/pages/Header/header";
import Footer from "@/components/pages/Footer/footer";
import GoogleTranslate from "@/components/pages/common/GoogleTranslate/googleTranslate";
import { Search, Zap } from "lucide-react";
import React, { useState, useEffect } from "react";
import "./page.css";

export default function Home({ hideHeader = false }) {

  const [openAnswers, setOpenAnswers] = useState<Set<number>>(new Set());
  const [showMore, setShowMore] = useState(false);

  const faqs = [
    {
      question: "What are Web3 domains ?",
      answer:
        "Web3 domains are blockchain-based domains that provide a decentralized identity, simplify cryptocurrency transactions, and enable hosting of decentralized websites.",
    },
    {
      question: "How are Web3 domains different from traditional domains ?",
      answer:
        "Unlike traditional domains managed by centralized authorities, Web3 domains are decentralized, owned permanently (no renewals on most TLDs), and can be used for crypto wallets, hosting decentralized websites, and as digital identities.",
    },
    {
      question: "Why should I buy a Web3 domain from Infinity Domains ?",
      answer:
        "At Infinity Domains, we offer a seamless experience for purchasing and managing Web3 domains, genuine pricing, and excellent customer support tailored for both beginners and experts in the blockchain space.",
    },
    {
      question: "What extensions are available on Infinity Domains ?",
      answer:
        "We offer a wide range of popular extensions, including .crypto, .eth, .nft, .dao, .bnb, .arb , .sol and many others name service provided by top public blockchains.",
    },
    // Hidden questions
    {
      question: "How can I use a Web3 domain ?",
      answer:
        "With your Web3 domain from Infinity Domains, you can replace complex wallet addresses with a human-readable name (e.g., yourname.crypto), host decentralized websites, use it as your digital identity across Web3 platforms, and park your domain with customized content for users to see.",
    },
    {
      question: "Can I host a website on my Web3 domain ?",
      answer:
        "Yes! Web3 domains from Infinity Domains can be used to host decentralized websites through platforms like IPFS or similar technologies.",
    },
    {
      question: "Are Web3 domains compatible with all wallets ?",
      answer:
        "Yes, Infinity Domains supports all major wallets, including Metamask, Trust Wallet, and Coinbase Wallet with more than 50+ wallets.",
    },
    {
      question: "Who owns the Web3 domain I purchase ?",
      answer:
        "You do! Once purchased from Infinity Domains, your domain is stored in your blockchain wallet, giving you full ownership and control.",
    },
  ];
  // Handle single click (show answer)
  const handleClick = (index: number) => {
    setOpenAnswers((prev) => new Set(prev).add(index));
  };
  // Handle double click (hide answer)
  const handleDoubleClick = (index: number) => {
    setOpenAnswers((prev) => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };
  // Handle show more button
  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div>
      {!hideHeader && <Header />}
      <GoogleTranslate />
      <main className="hero">

        {/* Part 1  */}
        <div className="hero-content">
          <h1 className="typewriter">Own. Secure. Capitalize.</h1>
          <h2>Web3 digital identity from $2</h2>
          <p>Your one-stop platform to buy, register, and manage web3 digital identities.<br/> Secure, simple, lifetime ownership.</p>
          <div className="search-box">
            <input type="text" placeholder="Search your Web3 digital identity" />
            <Search size={22} />
          </div>
          <button className="search-btn">Search Domain</button>
        </div>

        {/* Part 2  */}
        <div className="tld-marquee">
          <div className="tld-track">
            <a href="/">.org</a>
            <a href="/">.go</a>
            <a href="/">.ubu</a>
            <a href="/">.zil</a>
            <a href="/">.polygon</a>
            <a href="/">.arb</a>
            <a href="/">.bnb</a>
            <a href="/">.sol</a>
            <a href="/">.austin</a>
            <a href="/">.pudgy</a>  
            <a href="/">.mohit</a>          
          </div>
        </div>

        {/* Part 3  */}
        <div className="cta-row">
          <h1>Ready to own your web3 identity</h1>
          <div className="cta-right">
            <p>Get your Web3 digital identity name now</p>
           <a href="/blog"> <button>Learn More</button></a>
          </div>
        </div>

        {/* Part 4  */}
        <div className="card-marquee">
          <div className="card-track">
            <div className="feature-card">
              <h1>Social Media</h1>
              <img src="/banner/carousel/carousel_digital.svg" alt="Social Media" />
            </div>
            <div className="feature-card">
              <h1>Dapps</h1>
              <img src="/banner/carousel/carousel_dapps.png" alt="Dapps" />
            </div>
            <div className="feature-card">
              <h1>Website</h1>
              <img src="/banner/carousel/carousel_website_cuate.svg" alt="Website" />
            </div>
            <div className="feature-card">
              <h1>Wallet ID</h1>
              <img src="/banner/carousel/carousel_wallet.svg" alt="Wallet ID" />
            </div>
          </div>
        </div>

        {/* Part 5  */}
        <div className="ctaa-wrapper">
          <div className="ctaa-card">
            <div className="ctaa-text">
              <h2>Own the power of decentralized identity</h2>
              <p>Register your unique Web3 digital identity names</p>
            </div>
            <button className="ctaa-btn">Learn & Explore Now</button>
          </div>
        </div>

        {/* Part 6  */}
        <div className="heading-paragraph">
          <h1>Own your web3 identity with infinity possibilities</h1>
          <p>Build your brand stronger with premium web3 digital identities just for you.</p>
        </div>

        {/* Part 7  */}
        <div className="card-section">
          <div className="card-grid">
            <div className="simple-card">
              <img src="/banner/possibilities/explore.svg" alt="Explore" />
              <h1>Explore lifetime domains</h1>
              <p>Discover premium Web3 TLDs made just for you.</p>
              <button>Discover your own domain</button>
            </div>
            <div className="simple-card">
              <img src="/banner/possibilities/manage.svg" alt="Manage" />
              <h1>Manage Your Domains</h1>
              <p>Simplify Web3 digital identity management with next-gen smart tools.</p>
              <button>Manage your domains</button>
            </div>
            <div className="simple-card">
              <img src="/banner/possibilities/capitalize.svg" alt="Capitalize" />
              <h1>Capitalize Web3 Real-Estate</h1>
              <p>Tap into your domain's potential for profitable returns.</p>
              <button>Capitalize on your domains</button>
            </div>
          </div>
        </div>

        {/* Part 8  */}
        <div className="tld-section">
          <div className="tld-heading">
            <h1>Elevate your brand with diverse TLDs</h1>
            <p>Unlock your Web3 identity with Infinity Domains</p>
          </div>
          <div className="tld-cards">
            <div className="tld-card">
              <img src="/banner/profile/unrestricted.svg" alt="Unrestricted" />
              <h3>🚫 No Renewal Fees</h3>
              <p>Pay once, own forever. No renewals, no hidden charges.</p>
            </div>
            <div className="tld-card">
              <img src="/banner/profile/ownership.svg" alt="Ownership" />
              <h3>🔐 100% Ownership</h3>
              <p>Your identity lives on-chain and stays fully under your control.</p>
            </div>
            <div className="tld-card">
              <img src="/banner/profile/security.svg" alt="Security" />
              <h3>🌐 Decentralized Identity</h3>
              <p>Use one identity across wallets, dApps, NFTs, and DAOs.</p>
            </div>
            <div className="tld-card">
              <img src="/banner/profile/enhanced.svg" alt="Enhanced" />
              <h3>🛒 Marketplace Access</h3>
              <p>Buy, sell, and trade domains securely on-chain.</p>
            </div>
            <div className="tld-card">
              <img src="/banner/profile/unrestricted.svg" alt="Manage" />
              <h3>Wallet or Google Login</h3>
              <p>Manage your identity easily using wallet or Google.</p>
            </div>
          </div>
        </div>

        {/* Part 9  */}
        <div className="web3-section">
          <div className="web-img">
            <img src="/banner/web3-name/name_web3.png" alt="Web3" />
          </div>
          <div className="web-text">
            <h1>One Platform for All Your Web3 Digital Identities</h1>
            <p>Secure your Web3 digital identity for your brand with multi-chain support, fast transfers, unlimited free subdomains.</p>
          </div>
        </div>

        {/* Part 10  */}
        <div className="web3-hub">
          <div className="web3-hub-header">
            <h1>The One-Stop Web3 Digital Identity Hub</h1>
            <p>Infinity Domains champion global decentralised web adoption by enabling on-chain identity access and innovation.</p>
          </div>
          <div className="card-web3-identity">
            <div className="web3-card">
              <img src="/banner/web3-identity/Discover.svg" alt="Discover" />
              <h2>Marketplace</h2>
              <p>Discover trending names, niche collections, and rare drops with secure blockchain transactions.</p>
            </div>
            <div className="web3-card">
              <img src="/banner/web3-identity/Register.png" alt="Register" />
              <h2>Learning</h2>
              <p>Join Web3 bootcamps, student programs, tutorials, and earn rewards.</p>
            </div>
            <div className="web3-card">
              <img src="/banner/web3-identity/Manage.svg" alt="Manage" />
              <h2>Community</h2>
              <p>Connect with domainers and builders. Earn XP and grow globally.</p>
            </div>
            <div className="web3-card">
              <img src="/banner/web3-identity/Trade.svg" alt="Trade" />
              <h2>Support</h2>
              <p>Get help from real Web3 experts via Discord, email, and platform support.</p>
            </div>
          </div>
        </div>

        {/* Part 11  */}
        <div className="container">
          <div className="text-section">
            <h1>Discover Integrated DApps and Protocols</h1>
            <p>Explore the diverse ecosystem of Infinity Domains, with seamless integration into decentralized applications and protocols.</p>
          </div>
          <div className="icon-buttons">
            <button><img src="/profile/metamask-logo.svg" alt="MetaMask" /></button>
            <button><img src="/profile/ethereum-logo.svg" alt="Ethereum" /></button>
            <button><img src="/profile/space-id-logo.svg" alt="SpaceId" /></button>
            <button><img src="/profile/arbitrum-logo.svg" alt="Arbitrum" /></button>
            <button><img src="/profile/trust-wallet-logo.svg" alt="TrustWallet" /></button>
            <button><img src="/profile/solana-logo.svg" alt="Solana" /></button>
            <button><img src="/profile/wallet-connect-logo.svg" alt="WalletConnect" /></button>
            <button><img src="/profile/Binance-Smart-Chain.svg" alt="Binance" /></button>
          </div>
          <div className="build-button">
            <button><span>⚡</span> Build With Us</button>
          </div>
        </div>

        {/* Part 12  */}
        <div className="partner-section-wrapper">
          <div className="partner-section">
            <div className="text-section">
              <h1>Partner With Us</h1>
              <p>Accelerate Web3 Growth <span className="separator">|</span> Boost Web3 Ventures <span className="separator">|</span> Embrace Opportunities</p>
              <hr />
            </div>
            <div className="marquee-wrapper">
              <div className="marquee">
                <img src="/banner/carousel/full-bonfida.svg" alt="Bonfida" />
                <img src="/banner/carousel/full-space-id-logo.svg" alt="Space" />
                <img src="/banner/carousel/full-tezos-domain.svg" alt="Tezons" />
                <img src="/banner/carousel/full_ens.svg" alt="ENS" />
                <img src="/banner/carousel/full-Polygon-Matic.svg" alt="Polygon" />
                <img src="/banner/carousel/full-solana-logo.svg" alt="Solana" />
                <img src="/banner/carousel/full-binance-smart-chain.svg" alt="Binance" />
                <img src="/banner/carousel/full-ud-unstoppable.svg" alt="UnStoppable" />
                {/* <!-- Repeat logos for continuous loop --> */}
                <img src="/banner/carousel/full-bonfida.svg" alt="Bonfida" />
                <img src="/banner/carousel/full-space-id-logo.svg" alt="Space" />
                <img src="/banner/carousel/full-tezos-domain.svg" alt="Tezons" />
                <img src="/banner/carousel/full_ens.svg" alt="ENS" />
                <img src="/banner/carousel/full-Polygon-Matic.svg" alt="Polygon" />
                <img src="/banner/carousel/full-solana-logo.svg" alt="Solana" />
                <img src="/banner/carousel/full-binance-smart-chain.svg" alt="Binance" />
                <img src="/banner/carousel/full-ud-unstoppable.svg" alt="UnStoppable" />
              </div>
            </div>
            <div className="button-wrapper">
              <button>⚡ Become A Partner</button>
            </div>
          </div>
        </div>

        {/* Part 13  */}
        <div className="community-section">
          <h1 className="heading">Embraced by a Global Community</h1>
          <div className="map-wrapper">
            <img src="/banner/community/mapping.webp" alt="Mapping" className="map-image" />
            <div className="cards-container">
              <div className="card card1">
                <img src="/banner/community/bnb.svg" alt="wallet" />
                <h3>wallet</h3>
                <span>5k+</span>
              </div>
              <div className="card card2">
                <img src="/banner/community/polygon.svg" alt="Polygon" />
                <h3>Polygon</h3>
                <span>8k+</span>
              </div>
              <div className="card card3">
                <img src="/banner/community/bnb.svg" alt="Last Month Domain Registered" />
                <h3>Last Month Domain Registered</h3>
                <span>25000+</span>
              </div>
              <div className="card card4">
                <img src="/banner/community/crypto.svg" alt="Crypto" />
                <h3>Crypto</h3>
                <span>4k+</span>
              </div>
              <div className="card card5">
                <img src="/banner/community/nft.svg" alt="NFT" />
                <h3>NFT</h3>
                <span>8k+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Part 14  */}
        <div className="features-container">
          <h1>Features and Services</h1>
          <div className="features-wrapper">
            <div className="feature north">
              <img src="/banner/popular/domain-Investing.svg" alt="Domain Investing" />
              <p>Domain Investing</p>
            </div>
            <div className="feature west">
              <img src="/banner/popular/domain-aggregator.svg" alt="Domain Provider" />
              <p>Domain Provider</p>
            </div>
            <div className="feature center">
              <img src="/group1-removebg-preview.png" alt="Center Image" />
            </div>
            <div className="feature east">
              <img src="/banner/popular/parked-domain.svg" alt="Parked Domains" />
              <p>Parked Domains</p>
            </div>
            <div className="feature south">
              <img src="/banner/popular/marketplace.svg" alt="Marketplace" />
              <p>Marketplace</p>
            </div>
          </div>
        </div>

        {/* Part 15  */}
        <div className="testimonial-section">
          <h2>What our users say about us</h2>
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
              <p className="testimonial-text">Thanks to Infinity Domains, I found a domain that perfectly aligns with my brand's vision. Infinity Domains exceeded
                my expectations with their comprehensive database of Web 3 domains. Finding a memora....</p>
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
              <p className="testimonial-text">Thanks to Infinity Domains, I found a domain that perfectly aligns with my brand's vision. Infinity Domains exceeded
                my expectations with their comprehensive database of Web 3 domains. Finding a memora....</p>
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
              <p className="testimonial-text">Thanks to Infinity Domains, I found a domain that perfectly aligns with my brand's vision. Infinity Domains exceeded
                my expectations with their comprehensive database of Web 3 domains. Finding a memora....</p>
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
              <p className="testimonial-text">Thanks to Infinity Domains, I found a domain that perfectly aligns with my brand's vision. Infinity Domains exceeded
                my expectations with their comprehensive database of Web 3 domains. Finding a memora....</p>
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
              <p className="testimonial-text">Thanks to Infinity Domains, I found a domain that perfectly aligns with my brand's vision. Infinity Domains exceeded
                my expectations with their comprehensive database of Web 3 domains. Finding a memora....</p>
              <p className="testimonial-name">Mohit Sharma</p>
              <span className="testimonial-role">Full Stack Developer</span>
            </div>
          </div>
        </div>

        {/* Part 16  */}
       <div className="faq-container">
          <h1>Frequently asked questions</h1>
          <div className="faq-list">
            {faqs.map((faq, idx) => {
              if (!showMore && idx >= 4) return null;
              const isOpen = openAnswers.has(idx);
              return (
                <div
                  className={`faq-item ${isOpen ? "show-answer" : ""}`}
                  key={idx}
                >
                  <p
                    className="question"
                    onClick={() => handleClick(idx)}
                    onDoubleClick={() => handleDoubleClick(idx)}
                  >
                    {faq.question}
                  </p>
                  <span className="answer">{faq.answer}</span>
                </div>
              );
            })}
          </div>
          {!showMore && (
            <button id="showMoreBtn" onClick={handleShowMore}>
              Show More
            </button>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
