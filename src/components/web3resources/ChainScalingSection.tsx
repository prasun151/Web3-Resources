import React from "react";

const ChainScalingSection = () => (
  <section id="chain" className="mb-16">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Chains and Scaling</h2>
    
    <div id="eth" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Ethereum</h3>
      <article className="mb-4">
        Ethereum is the leading smart contract platform, offering a secure and decentralized environment for building dApps. It's transitioning to a more sustainable and scalable Proof of Stake model.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://ethereum.org/en/developers/" target="_blank" rel="noopener noreferrer">Ethereum Developer Portal</a></li>
          <li><a className="text-accent underline" href="https://eth.wiki/" target="_blank" rel="noopener noreferrer">Ethereum Wiki</a></li>
        </ol>
      </div>
    </div>

    <div id="sol" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Solana</h3>
      <article className="mb-4">
        Solana is known for its high throughput and low transaction costs, making it suitable for applications requiring high performance and scalability.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://solana.com/developers" target="_blank" rel="noopener noreferrer">Solana Developer Resources</a></li>
          <li><a className="text-accent underline" href="https://docs.solana.com/" target="_blank" rel="noopener noreferrer">Solana Documentation</a></li>
        </ol>
      </div>
    </div>

    <div id="l2" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">L2 & Scaling</h3>
      <article className="mb-4">
        Layer 2 solutions help blockchain networks scale by handling transactions off the main chain while inheriting the security of the base layer.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://ethereum.org/en/layer-2/" target="_blank" rel="noopener noreferrer">Ethereum L2 Solutions</a></li>
          <li><a className="text-accent underline" href="https://l2beat.com/" target="_blank" rel="noopener noreferrer">L2Beat Analytics</a></li>
        </ol>
      </div>
    </div>
  </section>
);

export default ChainScalingSection;
