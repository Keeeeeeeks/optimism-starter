// Replace with your contract address and ABI
const contractAddress = '0x763669D745314A46f12248E4c504D3d8fA167577';
const contractAbi = ''; //CONTRACT_ABI_HERE

// Initialize Web3
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

// Create a contract instance
const contract = new web3.eth.Contract(contractAbi, contractAddress);

// Function to get the owner of a token
async function getOwnerOfToken(tokenId) {
    try {
        const owner = await contract.methods.ownerOf(tokenId).call();
        console.log(`Owner of token ${tokenId}:`, owner);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to set trusted remote
async function setTrustedRemote(targetNetwork) {
    try {
        const accounts = await web3.eth.requestAccounts();
        const senderAddress = accounts[0];

        // Call the setTrustedRemote() function
        const result = await contract.methods.setTrustedRemote(targetNetwork).send({ from: senderAddress });

        console.log('Setting trusted remote successful:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to mint an NFT
async function mintNFT() {
    try {
        const accounts = await web3.eth.requestAccounts();
        const senderAddress = accounts[0];

        // Call the onftmint() function
        const result = await contract.methods.onftmint().send({ from: senderAddress });

        console.log('Minting successful:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to send NFT to another network
async function sendNFTToAnotherNetwork(tokenId, targetNetwork) {
    try {
        const accounts = await web3.eth.requestAccounts();
        const senderAddress = accounts[0];

        // Call the onftSend() function
        const result = await contract.methods.onftSend(targetNetwork, tokenId).send({ from: senderAddress });

        console.log('Sending NFT to another network successful:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to set minDstGas
async function setMinDstGas(targetNetwork, packetType, minGas) {
    try {
        const accounts = await web3.eth.requestAccounts();
        const senderAddress = accounts[0];

        // Call the setMinDstGas() function
        const result = await contract.methods.setMinDstGas(targetNetwork, packetType, minGas).send({ from: senderAddress });

        console.log('Setting minDstGas successful:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Button click event handler for Mint NFT
document.getElementById('mintButton').addEventListener('click', mintNFT);

// Button click event handler for Get Token Owner
document.getElementById('getTokenOwnerButton').addEventListener('click', () => {
    const tokenId = document.getElementById('tokenIdInput').value;
    if (tokenId !== '') {
        getOwnerOfToken(tokenId);
    } else {
        console.error('Please enter a valid token ID.');
    }
});

// Button click event handler for Send NFT to Another Network
document.getElementById('sendNFTButton').addEventListener('click', () => {
    const tokenId = document.getElementById('sendTokenIdInput').value;
    const targetNetwork = document.getElementById('targetNetworkInput').value;
    if (tokenId !== '' && targetNetwork !== '') {
        sendNFTToAnotherNetwork(tokenId, targetNetwork);
    } else {
        console.error('Please enter valid token ID and target network.');
    }
});



// Button click event handler for Set Trusted Remote
document.getElementById('setTrustedRemoteButton').addEventListener('click', () => {
    const targetNetwork = document.getElementById('setTrustedRemoteTargetInput').value;
    if (targetNetwork !== '') {
        setTrustedRemote(targetNetwork);
    } else {
        console.error('Please enter a valid target network.');
    }
});

// Button click event handler for Set Min Dst Gas
document.getElementById('setMinDstGasButton').addEventListener('click', () => {
    const targetNetwork = document.getElementById('setMinDstGasTargetInput').value;
    const packetType = parseInt(document.getElementById('setMinDstGasPacketTypeInput').value, 10);
    const minGas = parseInt(document.getElementById('setMinDstGasMinGasInput').value, 10);

    if (targetNetwork !== '' && !isNaN(packetType) && !isNaN(minGas)) {
        setMinDstGas(targetNetwork, packetType, minGas);
    } else {
        console.error('Please enter valid target network, packet type, and min gas.');
    }
});
