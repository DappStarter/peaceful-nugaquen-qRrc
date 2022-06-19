require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remember solid guess argue front slender'; 
let testAccounts = [
"0x7e42434690d1ed37786724886d82be0764adfda76963af02116ea2bbb29c5d6d",
"0x78d0bc5a90174b919d5cf756f51b4cfba477bc7bc837b447eeb3bfd787ad6e59",
"0xdf1bbdc6ff43f4a21cd47e40ea1fa3f1c71caae7833b131998028ba9fdf29e53",
"0xa6715cb12c353faad86ce6ab4c8228a551d000a3413fcba7ea7cf26a9e07cd00",
"0x68f4c2a3e4c493d7eb07750627556deeb64d0bb8ffd6f28154639a6dcb02abf0",
"0x9cdb340a3cad558712666e0f215ea596238a075509cb249c95c069e07f8e07cc",
"0x412385aa512404701e41b70ef727dd2423c1fe45936daa3192c80994edecbbda",
"0x70f2256bcdb68f85803624adfcc99217f6c438a1cc8772c8fc5a519a9f0d81d8",
"0x27c14fa25976d1b606ba1953a4817f2d9b8c13126750dbb1ae1a6dc8118be522",
"0xc85be06ae7bbb2251c8372aee0916a93bba3d912aa26a0417250094c91b56435"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

