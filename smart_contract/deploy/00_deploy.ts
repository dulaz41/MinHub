import { ethers } from "hardhat";
import { MinHub__factory } from "../typechain-types";

async function main() {
  const accounts = await ethers.getSigners();
  const deployer = accounts;
  const creators = [
    "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
    "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2",
  ];
  const royalties = ["0.2", "0.5"];
  const contractFactory = new MinHub__factory(deployer[0]);
  const contract = await contractFactory.deploy(
    "Name",
    "Symbol",
    "https://",
    "https://",
    20000,
    5,
    2,
    creators,
    royalties
  );
  await contract.deployed();
  console.log(`MinHub contract was deployed at address ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
