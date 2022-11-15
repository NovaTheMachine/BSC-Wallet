const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed4.binance.org"
);

async function getBalances(address) {
  let rawBalance = await provider.getBalance(address);
  let Balance = ethers.utils.formatEther(rawBalance);
  console.log(Balance);
}

getBalances("0xc790cccAe547d5B779e9DE94DCFc9C9ec12280c0");
