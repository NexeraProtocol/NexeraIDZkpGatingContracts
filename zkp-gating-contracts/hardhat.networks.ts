import dotenv from "dotenv";
import { NetworksUserConfig } from "hardhat/types";

dotenv.config();

// Default values
const SEPOLIA_PROVIDER_URL = "https://ethereum-sepolia-rpc.publicnode.com";
const DEFAULT_AMOY_URL = "https://rpc.ankr.com/polygon_amoy";
const DEFAULT_POLYGON_MAINNET = "https://polygon-rpc.com";
const DEFAULT_MNEMONIC =
  "witch collapse practice feed shame open despair creek road again ice least"; // never use that one in prod

// env variables
const DEPLOYMENT_MNEMONIC = process.env.DEPLOYMENT_MNEMONIC || DEFAULT_MNEMONIC;
const TEST_MNEMONIC = process.env.TEST_MNEMONIC || DEFAULT_MNEMONIC;
const POLYGON_MAINNET_PROVIDER_URL =
  process.env.POLYGON_MAINNET_PROVIDER_URL || DEFAULT_POLYGON_MAINNET;
const AMOY_PROVIDER_URL = process.env.AMOY_PROVIDER_URL || DEFAULT_AMOY_URL;

export const networks: NetworksUserConfig = {
  //prod
  polygon_main_prod: {
    live: true,
    chainId: 137,
    url: `${POLYGON_MAINNET_PROVIDER_URL}`,
    accounts: { mnemonic: DEPLOYMENT_MNEMONIC },
  },
  amoy_prod: {
    live: true,
    chainId: 80002,
    url: `${AMOY_PROVIDER_URL}`,
    accounts: { mnemonic: DEPLOYMENT_MNEMONIC },
  },
  sepolia_prod: {
    live: true,
    chainId: 11155111,
    url: SEPOLIA_PROVIDER_URL,
    accounts: { mnemonic: DEPLOYMENT_MNEMONIC },
  },
  // staging
  polygon_main_staging: {
    live: true,
    chainId: 137,
    url: `${POLYGON_MAINNET_PROVIDER_URL}`,
    accounts: { mnemonic: DEPLOYMENT_MNEMONIC },
  },
  amoy_staging: {
    live: true,
    chainId: 80002,
    url: `${AMOY_PROVIDER_URL}`,
    accounts: { mnemonic: DEPLOYMENT_MNEMONIC },
  },
  sepolia_staging: {
    live: true,
    chainId: 11155111,
    url: SEPOLIA_PROVIDER_URL,
    accounts: { mnemonic: DEPLOYMENT_MNEMONIC },
  },
  //dev
  polygon_main_dev: {
    live: true,
    chainId: 137,
    url: `${POLYGON_MAINNET_PROVIDER_URL}`,
    accounts: { mnemonic: DEPLOYMENT_MNEMONIC },
  },
  amoy_dev: {
    live: true,
    chainId: 80002,
    url: `${AMOY_PROVIDER_URL}`,
    accounts: { mnemonic: DEPLOYMENT_MNEMONIC },
  },
  sepolia_dev: {
    live: true,
    chainId: 11155111,
    url: SEPOLIA_PROVIDER_URL,
    accounts: { mnemonic: DEPLOYMENT_MNEMONIC },
  },
  // local
  hardhat: {
    live: false,
    forking: {
      url: `${AMOY_PROVIDER_URL}`,
      // using fixed block number is supposed to improve test performance
      blockNumber: 6043777,
    },
    // Nexera ID Test address is set up with tokens to test the Pool
    accounts: { mnemonic: TEST_MNEMONIC },
  },
};
