import React from "react";

const ZeroKnowledgeSection = () => (
  <section id="zkp" className="mb-16">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Zero Knowledge & Privacy</h2>
    
    <article className="mb-4">
      Zero-knowledge proofs enable verification of information without revealing the underlying data, crucial for blockchain privacy and scalability.
    </article>
    
    <div className="mt-2">
      <h4 className="font-semibold mb-1">Resources:</h4>
      <ol className="list-decimal ml-6 space-y-1">
        <li><a className="text-accent underline" href="https://docs.circom.io/" target="_blank" rel="noopener noreferrer">Circom</a></li>
        <li><a className="text-accent underline" href="https://zksync.io/" target="_blank" rel="noopener noreferrer">zkSync</a></li>
        <li><a className="text-accent underline" href="https://docs.aztec.network/" target="_blank" rel="noopener noreferrer">Aztec Network</a></li>
      </ol>
    </div>
  </section>
);

export default ZeroKnowledgeSection;
