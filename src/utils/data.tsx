import WebSocket from "isomorphic-ws";
import * as bitcoin from "bitcoinjs-lib";
import { JobPost } from "../models/state";
import * as nobleSecp256k1 from "noble-secp256k1"
import {Buffer} from 'buffer';
import { Signer, SignerAsync, ECPairInterface, ECPairFactory, ECPairAPI, TinySecp256k1Interface } from 'ecpair';

// You need to provide the ECC library. The ECC library must implement 
// all the methods of the `TinySecp256k1Interface` interface.
// const tinysecp: TinySecp256k1Interface = require('tiny-secp256k1');
// const ECPair: ECPairAPI = ECPairFactory(tinysecp);



const USER_KEY = 'user';

class Data {
    _relay = "wss://relay.nostr.info";
    _privKey = 'asdfasdfasdf'
    _bitworxPublicKey = "bc1qp0x5nxjlaytwdusk36svx94qlg3hrlwcksd7sh"
    // socket: any = null
    constructor() {
        this._privKey = 'asdfasdfasdf'
        // console.log(ECPair.makeRandom())
    }

    createMultisig(talentWallet: string, companyWallet:string) {
        const pubkeys = [talentWallet,
                         companyWallet,
                         this._bitworxPublicKey
        ].map(hex => Buffer.from(hex, 'hex'));
        const script = bitcoin.payments.p2ms({ m: 2, pubkeys })
        const { address } = bitcoin.payments.p2sh({
          redeem: script,
        });
        // console.log(address)
    }
    
    async sha256(password: string) {
        const textAsBuffer = new TextEncoder().encode(password);
        const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashedPassword = hashArray.map((item) => item.toString(16).padStart(2, "0")).join("");
        return hashedPassword
    }
    
    async login(walletAddress: string, password: string) {
        var { getSharedSecret, schnorr, utils } = nobleSecp256k1
        const bitworxPublicKey = "bc1qp0x5nxjlaytwdusk36svx94qlg3hrlwcksd7sh"
        const hashedPassword = await this.sha256(password)
        var subId = "bitworx-nostr-sub"
        // var subId   = bitcoin.ECPair.makeRandom().privateKey.toString( "hex" )
		var filter  = { "type": [ 12358 ] }
        console.log("meow");
        const socket = new WebSocket(this._relay)          
        socket.addEventListener('open', async function( loginResponse: any ) {
            console.log(loginResponse)
            let subscription = [ "REQ", subId, filter ]
            socket.send(JSON.stringify( subscription ));
            console.log(loginResponse)
            // console.log
            // var [ type, subId, event ] = JSON.parse( loginResponse.data );
		    // var { kind, content } = event || {}
		})
    }
    
    async createAccount(walletAddress: string, username: string, password: string, twitterHandle: string, portfolio?: string) {
        const bitworxPublicKey = "bc1qp0x5nxjlaytwdusk36svx94qlg3hrlwcksd7sh";
        const privKey = "asdfasdfasdfadf";
        const hashedPassword = await this.sha256(password);
        var filter = {"type": [12358]};
        let subId = "bitworks-nostr-sub";
        const socket = new WebSocket(this._relay);
        let userInfo = JSON.stringify({
            username: username,
            password: hashedPassword,
            walletAddress: walletAddress,
            portfolio: portfolio
        })
        let event = {
            "content"    : userInfo,
            "created_at" : Math.floor( Date.now() / 1000 ),
            "kind"       : 12358,
            "tags"       : ['bitworxUser'],
            "pubkey"     : bitworxPublicKey,
        }
        var signedEvent = await this.getSignedEvent(event, privKey)
        socket.addEventListener('open', async function(e: any) {
            let subscription = ["REQ", subId, filter]
            socket.send(JSON.stringify(subscription))
            console.log('signedEvent:', signedEvent)
		    socket.send(JSON.stringify([ "EVENT", signedEvent ]))
        })
    }

    async getSignedEvent(event: any, privateKey: string) {
        var { getSharedSecret, schnorr, utils } = nobleSecp256k1
        // console.log("asdfadsf")
        var eventData = JSON.stringify([
            0,                    // Reserved for future use
            event['pubkey'],        // The sender's public key
            event['created_at'],    // Unix timestamp
            event['kind'],        // Message “kind” or type
            event['tags'],        // Tags identify replies/recipients
            event['content']        // Your note contents
        ])
        event.id  = await this.sha256( eventData )
        console.log(event)
        event.sig = await schnorr.sign( event.id, privateKey ) 
        return event
    }

    // async createJobPost(jobPost: JobPost) {

        // }
}
    
    const data = new Data()
    
    export default data;

