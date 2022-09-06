const hre = require("hardhat");

const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contarct deployed to:", waveContract.address);
  console.log("Contarct deployed by:", owner.address);

  let waveCount;
  waveCount = await waveContract.getTotalWaves();

  console.log("Total Waves:", waveCount);

  let waveTxn = await waveContract.wave(); // Where wave is the function written in the solidity contract
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  waveTxn = await waveContract.connect(randomPerson).wave(); // Here Some Random person waving to us

  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
