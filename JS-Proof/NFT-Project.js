const NFT = []

function mintNFT (NFTAnimeName , NFTAnimeStrengthNumber , NFTAnimeColour) {
    NFT.push({
        NFTNAME : NFTAnimeName,
        NFTSTRENGTH : NFTAnimeStrengthNumber,
        NFTCOLOUR : NFTAnimeColour
    })
}


function listNFTs () {
    const length = NFT.length;
    for(i=0; i<length ; i++){
        console.log("ANIME NUMBER " + (i+1))
        console.log("ANIME NAME -> " + NFT[i].NFTNAME);
        console.log("ANIME STRENGTH LEVEL -> " + NFT[i].NFTSTRENGTH);
        console.log("ANIME COLOUR -> " + NFT[i].NFTCOLOUR);
    }
}

function getTotalSupply() {
    console.log("THERE ARE TOTAL "+ NFT.length + " NFTs")
}

mintNFT("GOKU",1000,"white")
mintNFT("DORAEMON",100,"blue")
mintNFT("SHINCHAN",10,"brown")
getTotalSupply()
listNFTs()

