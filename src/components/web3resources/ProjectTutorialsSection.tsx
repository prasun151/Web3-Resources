import React from "react";

const ProjectTutorialsSection = () => (
  <section id="projects" className="mb-16">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Project Tutorials</h2>
    
    <div id="beg" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Beginner</h3>
      <article className="mb-4">
        Start your Web3 journey with simple projects like token creation and basic smart contracts.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://cryptozombies.io/" target="_blank" rel="noopener noreferrer">CryptoZombies</a></li>
          <li><a className="text-accent underline" href="https://buildspace.so/" target="_blank" rel="noopener noreferrer">Buildspace</a></li>
        </ol>
      </div>
    </div>

    <div id="inter" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Intermediate</h3>
      <article className="mb-4">
        Build more complex applications like NFT marketplaces and DeFi protocols.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://www.pointer.gg/" target="_blank" rel="noopener noreferrer">Pointer</a></li>
          <li><a className="text-accent underline" href="https://www.web3.university/" target="_blank" rel="noopener noreferrer">Web3 University</a></li>
        </ol>
      </div>
    </div>

    <div id="adv" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Advanced</h3>
      <article className="mb-4">
        Tackle advanced topics like cross-chain bridges, Layer 2 solutions, and complex DeFi protocols.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://ethernaut.openzeppelin.com/" target="_blank" rel="noopener noreferrer">Ethernaut</a></li>
          <li><a className="text-accent underline" href="https://www.smartcontract.engineer/" target="_blank" rel="noopener noreferrer">Smart Contract Engineer</a></li>
        </ol>
      </div>
    </div>
  </section>
);

export default ProjectTutorialsSection;
