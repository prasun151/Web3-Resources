import React from "react";
import Web3BasicsSection from "@/components/web3resources/Web3BasicsSection";
import WalletsSection from "@/components/web3resources/WalletsSection";
import TokenomicsSection from "@/components/web3resources/TokenomicsSection";
import ChainScalingSection from "@/components/web3resources/ChainScalingSection";
import InfrastructureSection from "@/components/web3resources/InfrastructureSection";
import SmartContractsSection from "@/components/web3resources/SmartContractsSection";
import DevToolsSection from "@/components/web3resources/DevToolsSection";
import ProjectTutorialsSection from "@/components/web3resources/ProjectTutorialsSection";
import DeFiSection from "@/components/web3resources/DeFiSection";
import DigitalAssetsSection from "@/components/web3resources/DigitalAssetsSection";
import Web3CommunitiesSection from "@/components/web3resources/Web3CommunitiesSection";
import ZeroKnowledgeSection from "@/components/web3resources/ZeroKnowledgeSection";
import SecuritySection from "@/components/web3resources/SecuritySection";
import RegulationSection from "@/components/web3resources/RegulationSection";

const Web3Resources = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-eb-garamond">
      <header className="py-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Collection of the Best Web3 Resources</h1>
      </header>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 gap-12">
        {/* Sidebar/Table of Contents */}
        <aside className="md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
          <nav className="sticky top-8 bg-card rounded-lg p-6 shadow-md border">
            <h2 className="text-xl font-semibold mb-4">Table of Content</h2>
            <ul className="space-y-2 text-base">
              <li><a href="#basics" className="hover:text-accent">Web3 Basics</a></li>
              <li>
                <a href="#wallets" className="hover:text-accent">Wallets &amp; Identity</a>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li><a href="#CryWal" className="hover:text-accent">Crypto Wallets</a></li>
                  <li><a href="#did" className="hover:text-accent">DID &amp; SID</a></li>
                </ul>
              </li>
              <li><a href="#tokenomics" className="hover:text-accent">Tokenomics</a></li>
              <li>
                <a href="#chain" className="hover:text-accent">Chains and Scaling</a>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li><a href="#eth" className="hover:text-accent">Ethereum</a></li>
                  <li><a href="#sol" className="hover:text-accent">Solana</a></li>
                  <li><a href="#l2" className="hover:text-accent">L2 &amp; Scaling</a></li>
                </ul>
              </li>
              <li>
                <a href="#infra" className="hover:text-accent">Web3 Infrastructure</a>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li><a href="#oracle" className="hover:text-accent">Oracles &amp; Data Feeds</a></li>
                  <li><a href="#cross" className="hover:text-accent">Cross-Chain &amp; Bridges</a></li>
                  <li><a href="#onchain" className="hover:text-accent">On-Chain Analytics</a></li>
                  <li><a href="#mcv" className="hover:text-accent">Modular Chains &amp; Data Availability</a></li>
                </ul>
              </li>
              <li>
                <a href="#sc" className="hover:text-accent">Smart Contracts</a>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li><a href="#crosschain" className="hover:text-accent">Cross-Chain Contracts</a></li>
                  <li><a href="#soli" className="hover:text-accent">Solidity</a></li>
                  <li><a href="#rust" className="hover:text-accent">Rust</a></li>
                </ul>
              </li>
              <li>
                <a href="#devtools" className="hover:text-accent">Developer Tools &amp; Frameworks</a>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li><a href="#ide" className="hover:text-accent">IDEs</a></li>
                  <li><a href="#framework" className="hover:text-accent">Frameworks</a></li>
                  <li><a href="#test" className="hover:text-accent">Testing &amp; Debugging</a></li>
                  <li><a href="#cicd" className="hover:text-accent">CI &amp; CD</a></li>
                </ul>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent">Project Tutorials</a>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li><a href="#beg" className="hover:text-accent">Beginner</a></li>
                  <li><a href="#inter" className="hover:text-accent">Intermediate</a></li>
                  <li><a href="#adv" className="hover:text-accent">Advanced</a></li>
                </ul>
              </li>
              <li>
                <a href="#defi" className="hover:text-accent">Decentralized Finance [DeFi]</a>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li><a href="#stablecoins" className="hover:text-accent">Stablecoins &amp; Synthetics</a></li>
                  <li><a href="#earn" className="hover:text-accent">Earning through DeFi</a></li>
                </ul>
              </li>
              <li>
                <a href="#da" className="hover:text-accent">Digital Assets</a>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li><a href="#nfts" className="hover:text-accent">NFTs</a></li>
                  <li><a href="#rwa" className="hover:text-accent">Tokenised RWA</a></li>
                  <li><a href="#meta" className="hover:text-accent">Metaverse Platforms</a></li>
                </ul>
              </li>
              <li>
                <a href="#dao" className="hover:text-accent">Web3 Communities</a>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li><a href="#daos" className="hover:text-accent">DAOs</a></li>
                  <li><a href="#gov" className="hover:text-accent">Governance-Token Models</a></li>
                </ul>
              </li>
              <li><a href="#zkp" className="hover:text-accent">Zero Knowledge &amp; Privacy</a></li>
              <li>
                <a href="#sec" className="hover:text-accent">Web3 Security</a>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li><a href="#audit" className="hover:text-accent">Auditing</a></li>
                  <li><a href="#bounty" className="hover:text-accent">Bug Bounty</a></li>
                  <li><a href="#mev" className="hover:text-accent">MEV</a></li>
                </ul>
              </li>
              <li><a href="#reg" className="hover:text-accent">Regulation &amp; Ethics</a></li>
            </ul>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 space-y-16">
          <Web3BasicsSection />
          <WalletsSection />
          <TokenomicsSection />
          <ChainScalingSection />
          <InfrastructureSection />
          <SmartContractsSection />
          <DevToolsSection />
          <ProjectTutorialsSection />
          <DeFiSection />
          <DigitalAssetsSection />
          <Web3CommunitiesSection />
          <ZeroKnowledgeSection />
          <SecuritySection />
          <RegulationSection />
        </main>
      </div>
    </div>
  );
};

export default Web3Resources; 