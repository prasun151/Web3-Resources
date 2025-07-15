import React from "react";

const Web3CommunitiesSection = () => (
  <section id="dao" className="mb-16">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Web3 Communities</h2>
    
    <div id="daos" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">DAOs</h3>
      <article className="mb-4">
        Decentralized Autonomous Organizations enable community-driven governance and decision-making.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://aragon.org/" target="_blank" rel="noopener noreferrer">Aragon</a></li>
          <li><a className="text-accent underline" href="https://docs.snapshot.org/" target="_blank" rel="noopener noreferrer">Snapshot</a></li>
        </ol>
      </div>
    </div>

    <div id="gov" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Governance-Token Models</h3>
      <article className="mb-4">
        Governance tokens give holders voting power in protocol decisions and community management.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://compound.finance/governance" target="_blank" rel="noopener noreferrer">Compound Governance</a></li>
          <li><a className="text-accent underline" href="https://uniswap.org/governance" target="_blank" rel="noopener noreferrer">Uniswap Governance</a></li>
        </ol>
      </div>
    </div>
  </section>
);

export default Web3CommunitiesSection;
