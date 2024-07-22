import {
  Transaction,
  SystemProgram,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  sendAndConfirmTransaction,
  PublicKey,
} from "@solana/web3.js";

import wallet from "./dev-wallet.json";

const from = Keypair.fromSecretKey(new Uint8Array(wallet));

const to = new PublicKey("7JK3tPCxDym68FTdiLh8PEs1AEKm3KFvuzZnf5fS7rZy");

const connection = new Connection("https://api.devnet.solana.com");

async function transfer() {
  let transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: from.publicKey,
      toPubkey: to,
      lamports: 1 * LAMPORTS_PER_SOL,
    }),
  );

  let signature = await sendAndConfirmTransaction(connection, transaction, [
    from,
  ]);
  console.log("SIGNATURE", signature);
}

transfer();
