"use client"
import Header from "../header";
import Footer from "../../Footer/footer";
import { Search } from "lucide-react";
import React, { useState } from "react";
import GoogleTranslate from "../../common/GoogleTranslate/googleTranslate";
import "./domains.css";

export default function Domains() {
  const [showMore, setShowMore] = useState(false);
  const [openAnswers, setOpenAnswers] = useState<Set<number>>(new Set());
  const faqs = [
    {
      question: "How do web3 digital identities differ from traditional domains ?",
      answer:
        "web3 digital identities are stored on a decentralized network, providing increased security, resistance to censorship, and immutability. They enable users to have full ownership and control over their online presence, unlike Web2 domain names, which are controlled by centralized domain registrars and organizations. Moreover, web3 digital identities facilitate smoother integrations with decentralized apps (DApps) and services, aligning with the broader blockchain technology ecosystem. Web3 digital identity names can enhance trust and authenticity in digital interactions due to the blockchain’s transparency. This sets a new standard for establishing and maintaining our digital footprints.",
    },
    {
      question: "Can I transfer my existing domain to a Web3 digital identity ?",
      answer:
        "The transfer of traditional domains such as .com, .org, .net, .inc, .io, and more to web3 digital identities is not possible. web3 digital identities are unique to the decentralized internet and require a separate registration process. These are based on blockchain technology and operate on a different infrastructure from traditional domain names in the centralized DNS system. To create a presence on the decentralized web, you must register a new Web3 digital identity via a decentralized registrar. This process involves choosing a suitable Web3 digital identity name, checking its availability, and registering it using cryptocurrency.",
    },
    {
      question: "Why do I need a Web3 digital identity name ?",
      answer:
        "A Web3 digital identity name presents numerous benefits. By granting you complete ownership and authority over your online identity and assets, it eliminates the need for centralized authorities. It also facilitates seamless integration with a diverse range of decentralized applications and services. Additionally, web3 digital identities are built on blockchain technology, ensuring enhanced security and resistance to censorship, which is crucial in today’s digital landscape. This decentralized nature provides security and autonomy not typically available with traditional domain names. Moreover, web3 digital identities offer a user-friendly approach to conducting transactions in crypto, allowing for easy sending and receiving of various cryptocurrencies.",
    },
    {
      question: "Are web3 digital identities compatible with all blockchain protocols ?",
      answer:
        "web3 digital identities can integrate with various blockchain protocols, enabling seamless access to decentralized applications and services. However, compatibility may vary depending on the specific blockchain and its associated infrastructure. While many web3 digital identities are designed to be flexible and interoperable with a range of blockchains, there might be limitations based on the technical specifications and compatibilities of each blockchain protocol. It is important to research and understand the compatibility of your chosen Web3 digital identity with the blockchain protocols you intend to use.",
    },
    // Hidden questions
    {
      question: "Can I buy Web3 digital identity names from different domain providers at a time ?",
      answer:
        "No, you can only select and check out Web3 TLDs from the same domain provider. For example, you can select both .eth and .crypto domain extensions for purchase at once, but the payment process wouldn’t be successful since the domains must belong to the same provider. This limitation is due to how Web3 digital identity providers operate, each managing their specific domain extensions on their respective blockchain networks. Therefore, when purchasing multiple web3 digital identities, it’s essential to complete transactions for each provider separately. This process ensures that each domain is properly registered and linked to the correct blockchain protocol, maintaining the integrity and functionality of your web3 digital identities.",
    },
    {
      question: "How do I register a Web3 digital identity name ?",
      answer:
        "To register a Web3 digital identity name, start by selecting a Web3 digital identity registrar that offers the domain extension you are interested in (like .eth, .crypto, etc.). Check if your desired domain name is available by using the search tool on the registrar’s website. If it is available, register it by following the on-screen instructions, which typically involve connecting a digital wallet and completing the cryptocurrency transaction. After the confirmation of the transaction, you will have full ownership of the domain, with the ability to link it to your decentralized applications or use it as a wallet address.",
    },
    {
      question: "Which Web3 digital identity extension is the best ?",
      answer:
        "The best Web3 digital identity extension largely depends on your needs and the intended use of the domain. Popular options include ‘.eth’ and ‘.crypto’. If you prioritize seamless integration with the Ethereum blockchain and its ecosystem, ‘.eth’ is preferable. However, if you’re looking for broader blockchain compatibility and a focus on crypto transactions, ‘.crypto’ is more suitable. Ultimately, the ideal choice hinges on your requirements, such as the type of projects you’re involved in, the blockchain networks you use, and how you plan to use your Web3 digital identity.",
    },
    {
      question: "What security measures should I take with my web3 digital identities ?",
      answer:
        "The primary focus for securing your Web3 digital identity should be safeguarding your digital wallet linked to your domain ownership. Use a reputable wallet with robust security features, and enable two-factor authentication if available. It is crucial to store your private keys and recovery phrases securely - they are the only way to access your domain and wallet, and losing them could mean losing access to your digital assets. Avoid sharing these details with anyone, and consider using offline storage methods for added security. Regularly update your wallet software and follow best practices for digital security to protect your Web3 digital identity.",
    },
    {
      question: "How can I sell or transfer my Web3 digital identity to someone else ?",
      answer:
        "Selling or transferring a Web3 digital identity to someone else involves a few key steps. First, you must locate a buyer or have the recipient’s cryptocurrency wallet address. The transfer process is typically conducted through the platform or service where you registered your domain. You can initiate the transfer on these platforms by entering the recipient’s wallet address and confirming the transaction. For selling, you can list your domain on a marketplace that supports web3 digital identities or conduct a private sale, where payment and domain transfer details are arranged directly with the buyer. Once the transfer is confirmed on the blockchain, domain ownership will be successfully passed to the new owner.",
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

      {/* Part 1  */}
      <section className="domain-hero">
        <div className="domain-left">
          <h1>Search Your <br />Ideal Web3 Digital Identity <br />Name</h1>
          <p className="domain-subtext">Find, register, and secure your preferred Web3 digital identity name for lifetime ownership</p>
          <div className="domain-steps">
            <div className="step-card">
              <img src="/domain/card_domain.svg" />
              <span>Install a Crypto Wallet</span>
            </div>
            <div className="step-card">
              <img src="/domain/globe_domain.svg" />
              <span>Pick Your Web3 Identity</span>
            </div>
            <div className="step-card">
              <img src="/domain/wallet_domain.svg" />
              <span>Confirm Payment</span>
            </div>
          </div>
          <div className="domain-search">
            <input type="text" placeholder="Search" />
            <Search size={20} />
          </div>
        </div>
        <div className="domain-right">
          <div className="info-card small tilt-left">
            <img src="/domain/card_domain.svg" />
            <h4>Readable Wallet Address</h4>
            <p>Simplifying sending and receiving digital assets.</p>
          </div>
          <div className="info-card small tilt-right">
            <img src="/domain/card_domain.svg" />
            <h4>Domain privacy</h4>
            <p>Protect your digital information with secure Web3 privacy features.</p>
          </div>
          <div className="info-card large">
            <div>
              <img src="/domain/card_domain.svg" />
              <h4>Website Builder</h4>
              <p>Build a Web3-ready website to grow your business brand</p>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2  */}
      <section className="web3-identity">
        <div className="web3-header">
          <h1>Why owning Web3 digital identity is a need</h1>
          <p>Make your mark. Own your story. That’s Web3</p>
        </div>
        <div className="web3-content">
          <div className="web3-image">
            <img src="/domain/cookiesSS.png" alt="Cookies" />
          </div>
          <div className="web3-cards">
            <div className="web3-card">
              <img src="/domain/box-single.svg" />
              <span>Seamless Interactions</span>
              <p>web3 digital identities are user-friendly as these allow users to link a single unique name with different spaces like multiple wallet addresses, easing interaction and access with dApps.</p>
            </div>
            <div className="web3-card">
              <img src="/domain/user-check.svg" />
              <span>Establish Your Identity</span>
              <p>web3 digital identities provide individuals and DApps with a unique, recognizable identity, strengthening online presence across the Web3 ecosystem
              </p>
            </div>

            <div className="web3-card">
              <img src="/domain/lucide.svg" />
              <span>100% Ownership & Control</span>
              <p>100% ownership and control web3 digital identities grant decentralized ownership, letting users transfer, publish, or update records without relying on central authorities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />

      {/* Part 3  */}
      <section className="domain-buy">
        <h1>Buy your own Web3 digital identity</h1>
        <div className="domain-grid">
          <span>.X</span>
          <span>.ARB</span>
          <span>.Bitcoin</span>
          <span>.BlockChain</span>
          <span>.BNB</span>
          <span>.Crypto</span>
          <span>.888</span>
          <span>.Dao</span>
          <span>.Eth</span>
          {showMore && (
            <>
              <span>.Polygon</span>
              <span>.NFT</span>
              <span>.Sol</span>
              <span>.Tez</span>              
            </>
          )}
        </div>
        {!showMore && (
          <button className="show-more-btn" onClick={() => setShowMore(true)}>
            Show more
          </button>
        )}
      </section>

      {/* Part 4  */}
      <section className="web3-solutions">
        <h1>Empower your digital presence with smart Web3 solutions</h1>
        <div className="solutions-cards">
          <div className="solution-card">
            <img src="/domain/pc3.svg" alt="Hosting" />
            <p>Decentralized Website Hosting</p>
          </div>
          <div className="solution-card">
            <img src="/domain/pc2.svg" alt="Privacy" />
            <p>Enhanced User Privacy</p>
          </div>
          <div className="solution-card">
            <img src="/domain/pc1.svg" alt="Transactions" />
            <p>Error Free Transactions</p>
          </div>
        </div>
      </section>
      <hr />


      {/* Part 5  */}
      <section className="why-infinity">
        <h1>Why Infinity ?</h1>
        <div className="why-infinity-content">
          <div className="why-image">
            <img src="/why-infinity-domains.jpg" alt="why-infinity-domains" />
          </div>
          <div className="why-points">
            <div className="why-point">
              <img src="/domain/box.svg" alt="TLDs" />
              <div>
                <h2>Wide Web3 TLDs Range</h2>
                <p>
                  Infinity Domains offers a wide range of blockchain TLDs, including
                  .eth, .arb, .tez, .sol, .bnb, .polygon, and more.
                </p>
              </div>
            </div>
            <div className="why-point">
              <img src="/domain/avatar.svg" alt="Interface" />
              <div>
                <h2>Easy-to-Use Interface</h2>
                <p>
                  We make it simpler to register and manage your Web3 digital
                  identities—fast, secure, and user friendly.
                </p>
              </div>
            </div>
            <div className="why-point">
              <img src="/domain/percent.svg" alt="Offers" />
              <div>
                <h2>Exclusive Offers & Deals</h2>
                <p>
                  We offer gift coupons and promo codes, making your Web3 digital
                  identity purchase more rewarding and valuable.
                </p>
              </div>
            </div>
            <div className="why-point">
              <img src="/domain/feather.svg" alt="Support" />
              <div>
                <h2>Reliable Web3 Support</h2>
                <p>
                  We offer expert customer support and guidance. Contact our team
                  anytime via live chat or email for quick assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 6  */}
      <section className="manage-domains">
        <h2>Manage Your Registered Domains</h2>
        <div className="manage-steps">
          <div className="step">
            <img src="/domain/card_domain.svg" alt="Wallet" />
            <p>Install a Crypto Wallet</p>
          </div>
          <div className="step">
            <img src="/domain/globe_domain.svg" alt="Identity" />
            <p>Pick Your Web3 Identity</p>
          </div>
          <div className="step">
            <img src="/domain/wallet_domain.svg" alt="Payment" />
            <p>Confirm Payment</p>
          </div>
        </div>
      </section>


      {/* Part 7  */}
      <section className="empower-web3">
        <div className="empower-header">
          <h2>Empower Your Web3 Identity</h2>
          <p>Unlock the Full Power of Your Web3 Identity</p>
        </div>
        <div className="empower-row">
          <img src="/domain/management.svg" alt="Manage Domains" />
          <div className="empower-text">
            <h3>Manage Your Registered Domains</h3>
            <p>Easily manage Web3 digital identities with our simple dashboard. Track
              your identity, park domains, and transfer seamlessly.</p>
          </div>
        </div>
        <div className="empower-row reverse">
          <img src="/domain/listing.svg" alt="Premium Domains" />
          <div className="empower-text">
            <h3>Premium Domain Listings</h3>
            <p>Explore Web3 digital identities with top keywords, premium options, and
              buy lifetime domain names.</p>
          </div>
        </div>
      </section>


      {/* Part 8  */}
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


      {/* Part 9  */}
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


      {/* Part 10  */}
      <section className="domain-cta">
        <h1>Own Your Domain Now</h1>
        <p>Secure Your Presence with Web3 Digital Identities</p>
        <div className="search-box">
          <input type="text" placeholder="Search your domain" />
          <Search size={20} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
