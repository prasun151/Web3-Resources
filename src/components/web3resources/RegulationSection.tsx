import React from "react";

const RegulationSection = () => (
  <section id="reg" className="mb-16">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Regulation & Ethics</h2>
    
    <article className="mb-4">
      Understanding regulatory frameworks and ethical considerations is crucial for building compliant and responsible Web3 projects.
    </article>
    
    <div className="mt-2">
      <h4 className="font-semibold mb-1">Resources:</h4>
      <ol className="list-decimal ml-6 space-y-1">
        <li><a className="text-accent underline" href="https://www.sec.gov/spotlight/cybersecurity-enforcement-actions" target="_blank" rel="noopener noreferrer">SEC Crypto Regulations</a></li>
        <li><a className="text-accent underline" href="https://www.fsb.org/work-of-the-fsb/financial-innovation-and-structural-change/crypto-assets-and-global-stablecoins/" target="_blank" rel="noopener noreferrer">FSB Crypto Framework</a></li>
        <li><a className="text-accent underline" href="https://www.web3privacy.info/" target="_blank" rel="noopener noreferrer">Web3 Privacy Guidelines</a></li>
      </ol>
    </div>
  </section>
);

export default RegulationSection;
