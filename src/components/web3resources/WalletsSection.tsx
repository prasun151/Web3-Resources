import React from "react";

const WalletsSection = () => (
  <section id="wallets" className="mb-16">
    <h2 className="text-2xl md:text-3xl font-semibold mb-2">Wallets &amp; Identity</h2>
    <div id="CryWal" className="mb-6">
      <h3 className="text-xl font-semibold mb-1">Crypto Wallets</h3>
      <p className="mb-1">Crypto Wallets are digital tools that store your private keys (like passwords) to access and manage your cryptocurrency holdings on the blockchain. Unlike traditional wallets that hold physical cash, crypto wallets hold cryptographic keys that prove ownership of digital assets.</p>
      <div>
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="btn text-accent underline" href="https://docs.metamask.io/" target="_blank" rel="noopener noreferrer">Metamask SDK Documentation</a></li>
          <li><a className="btn text-accent underline" href="https://www.youtube.com/watch?v=yIDUZPHyZPs" target="_blank" rel="noopener noreferrer">Trust Wallet Guide</a></li>
          <li><a className="btn text-accent underline" href="https://docs.walletconnect.network/" target="_blank" rel="noopener noreferrer">WalletConnect Documentation</a></li>
        </ol>
      </div>
    </div>
    <div id="did">
      <h3 className="text-xl font-semibold mb-1">DID &amp; SID</h3>
      <p className="mb-1">DID &amp; SID (Decentralized Identity &amp; Self-Sovereign Identity) enable users to own and control their digital identity without relying on centralized authorities like governments or corporations. Instead of logging into websites with Google or Facebook accounts, users can authenticate themselves using blockchain-based identities they fully control.</p>
      <div>
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="btn text-accent underline" href="https://identity.foundation/" target="_blank" rel="noopener noreferrer">Self-Sovereign Identity Foundation</a></li>
          <li><a className="btn text-accent underline" href="https://www.w3.org/TR/did-core/" target="_blank" rel="noopener noreferrer">W3C DID Specialisation</a></li>
          <li><a className="btn text-accent underline" href="https://learn.microsoft.com/en-us/entra/identity-platform/" target="_blank" rel="noopener noreferrer">Microsoft Identity Platform</a></li>
        </ol>
      </div>
    </div>
  </section>
);

export default WalletsSection; 