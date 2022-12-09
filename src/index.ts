/** @format */

import { createMint } from "@solana/spl-token";
import {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
// import { publickey } from "../wallet";

const fs = require("fs");

async function mintToken() {
  const payer = Keypair.generate();
  //   const mintAuthority = Keypair.generate();
  //   const freezeAuthority = Keypair.generate();

  //This writes json file for the payer
  //   fs.writeFileSync(
  //     "./keypair.ts",
  //     `
  //     export const publickey = "${payer}"
  //     `
  //   );

  const data = {
    payer,
  };
  fs.writeFileSync("./keypair.json", `${payer}`);

  //   const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  //   const airdropSignature = await connection.requestAirdrop(
  //     new PublicKey(publickey),
  //     2 * LAMPORTS_PER_SOL
  //   );
  //   const tx = await connection.confirmTransaction(airdropSignature);
  //   console.log(tx);
  //   console.log(wallet);
  //   const mint = await createMint(
  //     connection,
  //     payer,
  //     mintAuthority.publicKey,
  //     freezeAuthority.publicKey,
  //     9 // We are using 9 to match the CLI decimal default exactly
  //   );

  //   console.log(mint.toBase58());
}
mintToken();
