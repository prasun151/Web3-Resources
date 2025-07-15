import React from "react";

const DigitalAssetsSection = () => (
  <section id="da" className="mb-16">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Digital Assets</h2>
    
    <div id="nfts" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">NFTs</h3>
      <article className="mb-4">
        Non-fungible tokens represent unique digital assets, enabling digital ownership and new forms of creative expression.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://docs.opensea.io/" target="_blank" rel="noopener noreferrer">OpenSea Docs</a></li>
          <li><a className="text-accent underline" href="https://eips.ethereum.org/EIPS/eip-721" target="_blank" rel="noopener noreferrer">ERC-721 Standard</a></li>
        </ol>
      </div>
    </div>

    <div id="rwa" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Tokenised RWA</h3>
      <article className="mb-4">
        Real-World Assets (RWA) tokenization brings traditional assets like real estate and commodities on-chain.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://centrifuge.io/" target="_blank" rel="noopener noreferrer">Centrifuge</a></li>
          <li><a className="text-accent underline" href="https://www.goldfinch.finance/" target="_blank" rel="noopener noreferrer">Goldfinch</a></li>
        </ol>
      </div>
    </div>

    <div id="meta" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Metaverse Platforms</h3>
      <article className="mb-4">
        Metaverse platforms create virtual worlds where users can interact, own digital land, and build experiences.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://docs.decentraland.org/" target="_blank" rel="noopener noreferrer">Decentraland</a></li>
          <li><a className="text-accent underline" href="https://www.sandbox.game/en/" target="_blank" rel="noopener noreferrer">The Sandbox</a></li>
        </ol>
      </div>
    </div>
  </section>
);

export default DigitalAssetsSection;
