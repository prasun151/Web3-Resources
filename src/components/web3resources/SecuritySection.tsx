import React from "react";

const SecuritySection = () => (
  <section id="sec" className="mb-16">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Web3 Security</h2>
    
    <div id="audit" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Auditing</h3>
      <article className="mb-4">
        Smart contract audits are crucial for identifying vulnerabilities and ensuring protocol security.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://consensys.io/diligence/" target="_blank" rel="noopener noreferrer">ConsenSys Diligence</a></li>
          <li><a className="text-accent underline" href="https://www.certik.com/" target="_blank" rel="noopener noreferrer">CertiK</a></li>
        </ol>
      </div>
    </div>

    <div id="bounty" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Bug Bounty</h3>
      <article className="mb-4">
        Bug bounty programs incentivize security researchers to find and report vulnerabilities.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://immunefi.com/" target="_blank" rel="noopener noreferrer">Immunefi</a></li>
          <li><a className="text-accent underline" href="https://hackenproof.com/" target="_blank" rel="noopener noreferrer">HackenProof</a></li>
        </ol>
      </div>
    </div>

    <div id="mev" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">MEV</h3>
      <article className="mb-4">
        Maximal Extractable Value represents value that can be extracted from transaction ordering in blockchain systems.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://ethereum.org/en/developers/docs/mev/" target="_blank" rel="noopener noreferrer">MEV Documentation</a></li>
          <li><a className="text-accent underline" href="https://www.flashbots.net/" target="_blank" rel="noopener noreferrer">Flashbots</a></li>
        </ol>
      </div>
    </div>
  </section>
);

export default SecuritySection;
