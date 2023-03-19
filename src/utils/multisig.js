// import * as bitcoin from 'bitcoinjs-lib'

function createMultisigAddress(pubKey1,pubKey2,pubKey3) {
    const pubKeys = [pubKey1, pubKey2, pubKey3].map((hex) => Buffer.from(hex, 'hex'));

    // const p2ms = bitcoin.payments.p2ms({ m: 2, pubkeys: pubKeys });
    // const p2sh = bitcoin.payments.p2sh({ redeem: p2ms });

    // return p2sh.address;
}

export default createMultisigAddress;