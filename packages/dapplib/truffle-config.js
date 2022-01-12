require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember assume hover prize success general'; 
let testAccounts = [
"0x4d55624ce7c490679a285fb50cbf9e682380cc25d5261c19a60272d6746d42ae",
"0xc78cc8351b841eef0f3452ec5097bb5372f49adfc10e50eb1e89dc971924cd78",
"0x244625204c4de97439706c8fb144e4f79073e597b17a239cad40f64725a637f2",
"0xbf5a621e8ed36c62f7e284b01cc51e5335cdb4703e8f38b2dbec1d35fd864524",
"0xdc239739530e8f5555177072a0b3918751561809338beae5339284db060dd19f",
"0x6c3c06ab799929f9e9490366614428e2a893dcee37f3cec2a480bc8f441a424b",
"0xa697520717bbcb20b8a4daed59d96a250af34b177f661b04e37078c59c423622",
"0xd3d8e3cbf749023a7d50f14a692af4c54860840ce24a824ffb8350f48f0a5cdf",
"0x5f569a1ea4837a96e482bb4f2afcba5b796ca5a91ba736713750da8ee298cd2b",
"0x146a2d1719797d0624768dbc11a16784752b7ae0ef2ccce213d417a4bd17b093"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


