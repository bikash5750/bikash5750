// We Create a variable to hold your NFTs
//So we created array to store
let nftM = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(_name, _uid, _joiningyear, _branch) {
    const nft = {
        name: _name,
        uid: _uid,
        joiningyear: _joiningyear,
        branch: _branch
    };
    nftM.push(nft);  // so we have to push our data into array
    console.log(`NFT minted: ${_name}`);  // to display from what name we have use to mint nft
    console.log("----------------------")   // to make readable in console i just put this lines
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nftM.length; i++) {
        console.log("Name: " + nftM[i].name);
        console.log("Uid: " + nftM[i].uid);
        console.log("Joiningyear: " + nftM[i].joiningyear);
        console.log("Branch: " + nftM[i].branch);
        console.log("---------------------------------------")
        
    }
}

// Function to Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftM.length;       // ultimately you can say length of array is no of nft minted
}

// Call your functions below this line
mintNFT("Bikash", "22bcs10072", "2022", "CSE");  // details 
mintNFT("Prince", "21bca1039", "2021", "BCA");
mintNFT("Deepu", "22bcs10067", "2022", "CSE");
mintNFT("Ankit", "22bcs10269", "2021", "AIT");


listNFTs();   // we just called to list all our nft and details
console.log("Total Supply or Total NFT Minted are: " + getTotalSupply());   // this will return no of nft minted
