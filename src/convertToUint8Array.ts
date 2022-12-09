/** @format */

import { web3 } from "@project-serum/anchor";

export async function convertToUint8Array(keypairFile: any) {
  const fs = require("fs");

  const loaded = web3.Keypair.fromSecretKey(
    new Uint8Array(JSON.parse(fs.readFileSync(keypairFile).toString()))
  );

  return loaded;
}

async function main() {
  const myKeypair = await convertToUint8Array("wallet.json");
  console.log(myKeypair);
}
main();
