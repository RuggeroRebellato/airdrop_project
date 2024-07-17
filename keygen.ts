import { Keypair } from "@solana/web3.js";
import fs from "fs";

let kp = Keypair.generate();
console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`);
console.log(`Solana Wallet Secret Key: ${kp.secretKey}]`);
fs.writeFileSync("./dev-wallet.json", `[${kp.secretKey.toString()}]`);
console.log("Secret key saved to dev-wallet.json");
