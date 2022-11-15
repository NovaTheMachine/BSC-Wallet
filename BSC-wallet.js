const { ethers } = require("ethers");
const genericErc20Abi = require("./ERC20.json");
const tokenContractAddress = "0x1E16D4579D6a1471745a20eC491739e201971151";
//console.log(genericErc20Abi)

const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed4.binance.org"
);
const contract = new ethers.Contract(
  tokenContractAddress,
  genericErc20Abi,
  provider
);

async function getBalances(address) {
  const rawBalance = await contract.balanceOf(address);
  let Balance = ethers.utils.formatEther(rawBalance.toString());
  console.log(Balance);
}

getBalances("0xe68a8780f369b24d94514290a535d9477ee4c68c");
