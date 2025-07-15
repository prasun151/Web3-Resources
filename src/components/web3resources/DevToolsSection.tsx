import React from "react";

const DevToolsSection = () => (
  <section id="devtools" className="mb-16">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Developer Tools & Frameworks</h2>
    
    <div id="ide" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">IDEs</h3>
      <article className="mb-4">
        Specialized development environments enhance the Web3 development experience with features like syntax highlighting and contract compilation.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://remix.ethereum.org/" target="_blank" rel="noopener noreferrer">Remix IDE</a></li>
          <li><a className="text-accent underline" href="https://hardhat.org/" target="_blank" rel="noopener noreferrer">Hardhat</a></li>
        </ol>
      </div>
    </div>

    <div id="framework" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
      <article className="mb-4">
        Web3 frameworks provide tools and libraries for efficient dApp development and smart contract integration.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://trufflesuite.com/" target="_blank" rel="noopener noreferrer">Truffle Suite</a></li>
          <li><a className="text-accent underline" href="https://docs.openzeppelin.com/" target="_blank" rel="noopener noreferrer">OpenZeppelin</a></li>
        </ol>
      </div>
    </div>

    <div id="test" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Testing & Debugging</h3>
      <article className="mb-4">
        Proper testing and debugging tools are crucial for developing secure and reliable smart contracts and dApps.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://www.chaijs.com/" target="_blank" rel="noopener noreferrer">Chai Testing</a></li>
          <li><a className="text-accent underline" href="https://tenderly.co/" target="_blank" rel="noopener noreferrer">Tenderly Debugger</a></li>
        </ol>
      </div>
    </div>

    <div id="cicd" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">CI & CD</h3>
      <article className="mb-4">
        Continuous Integration and Deployment pipelines automate testing and deployment of smart contracts and dApps.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer">GitHub Actions</a></li>
          <li><a className="text-accent underline" href="https://www.travis-ci.com/" target="_blank" rel="noopener noreferrer">Travis CI</a></li>
        </ol>
      </div>
    </div>
  </section>
);

export default DevToolsSection;
