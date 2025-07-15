import React from "react";

const TokenomicsSection = () => (
  <section id="tokenomics" className="mb-16">
    <h2 className="text-2xl md:text-3xl font-semibold mb-2">Tokenomics</h2>
    <article className="mb-2">Tokenomics refers to the economic model and incentive structure of cryptocurrency tokens, including how they're created, distributed, and used within a blockchain ecosystem. It encompasses supply mechanisms, utility functions, and governance models that determine a token's value and sustainability.</article>
    <div className="mt-2">
      <h4 className="font-semibold mb-1">Resources:</h4>
      <ol className="list-decimal ml-6 space-y-1">
        <li><a className="btn text-accent underline" href="https://docs.metamask.io/" target="_blank" rel="noopener noreferrer">Metamask SDK Documentation</a></li>
        <li><a className="btn text-accent underline" href="https://www.youtube.com/watch?v=yIDUZPHyZPs" target="_blank" rel="noopener noreferrer">Trust Wallet Guide</a></li>
        <li><a className="btn text-accent underline" href="https://docs.walletconnect.network/" target="_blank" rel="noopener noreferrer">WalletConnect Documentation</a></li>
      </ol>
    </div>
  </section>
);

export default TokenomicsSection; 