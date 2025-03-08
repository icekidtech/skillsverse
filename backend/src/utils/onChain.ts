import { SuiClient } from "@mysten/sui.js/client";

const client = new SuiClient({ url: process.env.SUI_NODE_URL });

export async function verifyCredentialOnChain(userAddress: string, credentialId: string): Promise<any> {
  const result = await client.executeMoveCall({
    packageObjectId: "0xCREDENTIAL_VERIFICATION_PACKAGE_ID",
    module: "credential_verification",
    function: "verify_credential",
    typeArguments: [],
    arguments: [userAddress, credentialId],
    gasBudget: 10000,
  });
  return result;
}

export async function mintCredentialOnChain(userAddress: string, credentialData: string): Promise<any> {
  const result = await client.executeMoveCall({
    packageObjectId: "0xCREDENTIAL_MINTING_PACKAGE_ID",
    module: "credential_minting",
    function: "mint_credential",
    typeArguments: [],
    arguments: [userAddress, credentialData],
    gasBudget: 10000,
  });
  return result;
}