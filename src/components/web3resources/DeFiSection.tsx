import React from "react";

const DeFiSection = () => (
  <section id="defi" className="mb-16">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Decentralized Finance [DeFi]</h2>
    
    <div id="stablecoins" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Stablecoins & Synthetics</h3>
      <article className="mb-4">
        Stablecoins provide price stability in the volatile crypto market, while synthetics enable exposure to traditional assets on-chain.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://makerdao.com/" target="_blank" rel="noopener noreferrer">MakerDAO</a></li>
          <li><a className="text-accent underline" href="https://www.synthetix.io/" target="_blank" rel="noopener noreferrer">Synthetix</a></li>
        </ol>
      </div>
    </div>

    <div id="earn" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Earning through DeFi</h3>
      <article className="mb-4">
        DeFi protocols offer various ways to earn yield through lending, liquidity provision, and yield farming.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://aave.com/" target="_blank" rel="noopener noreferrer">Aave</a></li>
          <li><a className="text-accent underline" href="https://compound.finance/" target="_blank" rel="noopener noreferrer">Compound</a></li>
        </ol>
      </div>
    </div>
  </section>
);

export default DeFiSection;
