// your active private key of the slant account (private key of ActivePubKey that you used when creating the slant account (see README))
let keyProvider = ['5JcKUn5NBAqBuhoE4H2k4jqZmLHgFZ94eXxkXKH2DMKhziKjnBN'];

// our testnet
// let httpEndpoint = 'http://angelos-eos-testnet.drrrive.com:8888';
// local development
let httpEndpoint = 'http://localhost:8888';

let eos = Eos.Localnet({keyProvider: keyProvider, httpEndpoint: httpEndpoint});

let account = 'example';
let contract = 'example';
