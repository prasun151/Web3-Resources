import React from "react";

const InfrastructureSection = () => (
  <section id="infra" className="mb-16">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Web3 Infrastructure</h2>
    
    <div id="oracle" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Oracles & Data Feeds</h3>
      <article className="mb-4">
        Oracles bridge the gap between blockchain networks and external data sources, enabling smart contracts to interact with real-world information.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://chain.link/" target="_blank" rel="noopener noreferrer">Chainlink Documentation</a></li>
          <li><a className="text-accent underline" href="https://docs.bandchain.org/" target="_blank" rel="noopener noreferrer">Band Protocol</a></li>
        </ol>
      </div>
    </div>

    <div id="cross" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Cross-Chain & Bridges</h3>
      <article className="mb-4">
        Cross-chain bridges enable assets and data to move between different blockchain networks, fostering interoperability in the Web3 ecosystem.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://bridge.arbitrum.io/" target="_blank" rel="noopener noreferrer">Arbitrum Bridge</a></li>
          <li><a className="text-accent underline" href="https://www.portalbridge.com/" target="_blank" rel="noopener noreferrer">Wormhole Bridge</a></li>
        </ol>
      </div>
    </div>

    <div id="onchain" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">On-Chain Analytics</h3>
      <article className="mb-4">
        On-chain analytics tools help analyze blockchain data to derive insights about network activity, user behavior, and market trends.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://dune.com/" target="_blank" rel="noopener noreferrer">Dune Analytics</a></li>
          <li><a className="text-accent underline" href="https://www.nansen.ai/" target="_blank" rel="noopener noreferrer">Nansen</a></li>
        </ol>
      </div>
    </div>

    <div id="mcv" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Modular Chains & Data Availability</h3>
      <article className="mb-4">
        Modular blockchain architecture separates consensus, execution, and data availability layers to improve scalability and flexibility.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://celestia.org/" target="_blank" rel="noopener noreferrer">Celestia Documentation</a></li>
          <li><a className="text-accent underline" href="https://polygon.technology/solutions/polygon-avail/" target="_blank" rel="noopener noreferrer">Polygon Avail</a></li>
        </ol>
      </div>
    </div>
  </section>
);

export default InfrastructureSection;
