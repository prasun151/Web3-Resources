import React from "react";

const SmartContractsSection = () => (
  <section id="sc" className="mb-16">
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Smart Contracts</h2>
    
    <div id="crosschain" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Cross-Chain Contracts</h3>
      <article className="mb-4">
        Cross-chain smart contracts enable interaction between different blockchain networks, allowing for more complex and interoperable decentralized applications.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://docs.axelar.dev/" target="_blank" rel="noopener noreferrer">Axelar Documentation</a></li>
          <li><a className="text-accent underline" href="https://layerzero.network/" target="_blank" rel="noopener noreferrer">LayerZero</a></li>
        </ol>
      </div>
    </div>

    <div id="soli" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Solidity</h3>
      <article className="mb-4">
        Solidity is the primary programming language for developing smart contracts on Ethereum and EVM-compatible chains.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://docs.soliditylang.org/" target="_blank" rel="noopener noreferrer">Solidity Documentation</a></li>
          <li><a className="text-accent underline" href="https://github.com/OpenZeppelin/openzeppelin-contracts" target="_blank" rel="noopener noreferrer">OpenZeppelin Contracts</a></li>
        </ol>
      </div>
    </div>

    <div id="rust" className="mb-8">
      <h3 className="text-xl font-semibold mb-4">Rust</h3>
      <article className="mb-4">
        Rust is used for developing smart contracts on platforms like Solana and Near, offering high performance and memory safety.
      </article>
      <div className="mt-2">
        <h4 className="font-semibold mb-1">Resources:</h4>
        <ol className="list-decimal ml-6 space-y-1">
          <li><a className="text-accent underline" href="https://docs.solana.com/developing/on-chain-programs/overview" target="_blank" rel="noopener noreferrer">Solana Program Development</a></li>
          <li><a className="text-accent underline" href="https://docs.near.org/develop/contracts/introduction" target="_blank" rel="noopener noreferrer">NEAR Smart Contracts</a></li>
        </ol>
      </div>
    </div>
  </section>
);

export default SmartContractsSection;
