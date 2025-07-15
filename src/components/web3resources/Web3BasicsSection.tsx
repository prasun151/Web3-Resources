import React from "react";

const Web3BasicsSection = () => (
  <section id="basics" className="mb-16">
    <h2 className="text-2xl md:text-3xl font-semibold mb-2">Web3 Basics</h2>
    <article className="mb-2">
      Web3 represents the next evolution of the internet, transforming it from a read-write model (Web 2.0) to a read-write-own paradigm where users have true ownership of their data and digital assets through blockchain technology. Unlike Web 2.0, where centralized companies control user data, Web3 operates on decentralized networks that give users control over their information and enable peer-to-peer interactions without intermediaries.
    </article>
    <div className="mt-2">
      <h4 className="font-semibold mb-1">Resources:</h4>
      <ol className="list-decimal ml-6 space-y-1">
        <li><a className="btn text-accent underline" href="https://www.simplilearn.com/tutorials/blockchain-tutorial/what-is-web-3-0" target="_blank" rel="noopener noreferrer">Simplilearn Web3 Guide</a></li>
        <li><a className="btn text-accent underline" href="https://chain.link/education/web3" target="_blank" rel="noopener noreferrer">Chainlink Web3 Education</a></li>
        <li><a className="btn text-accent underline" href="https://ethereum.org/en/web3/" target="_blank" rel="noopener noreferrer">Ethereum Web3 Guide</a></li>
      </ol>
    </div>
  </section>
);

export default Web3BasicsSection; 