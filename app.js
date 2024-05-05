import bs58 from 'bs58';
import fetch from 'node-fetch';
import JSBI from 'jsbi';
import { Connection, PublicKey, Keypair } from '@solana/web3.js';
import { Jupiter, RouteInfo, TOKEN_LIST_URL, SwapResult } from '@jup-ag/core';

// It is recommended that you use your own RPC endpoint.
// This RPC endpoint is only for demonstration purposes so that this example will run.
const SOLANA_RPC_ENDPOINT = "https://neat-hidden-sanctuary.solana-mainnet.discover.quiknode.pro/2af5315d336f9ae920028bbb90a73b724dc1bbed/";
const ENV = (process.env.CLUSTER) || "mainnet-beta";

// index.js
const main = async () => {
  try {
      // Setup Solana RPC connection    
      const connection = new Connection(SOLANA_RPC_ENDPOINT);
      // Fetch token list from Jupiter API
      // This token list contains token meta data
      const tokens: Token[] = await (await fetch(TOKEN_LIST_URL[ENV])).json();    
      // ...  
  }
  
};
main();
