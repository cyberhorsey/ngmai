const fs = require("fs");

const attributeCount = 8;

function main() {
    for(let i =1; i <= 888; i++) {
 fs.readFileSync(`./nfts/${i}.gif`)
    }
}

main()