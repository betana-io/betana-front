import React, {useEffect, useState } from 'react';
import { PublicKey, Transaction } from "@solana/web3.js";

type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod =
    | "connect"
    | "disconnect"
    | "signTransaction"
    | "signAllTransactions"
    | "signMessage";

interface ConnectOpts {
    onlyIfTrusted: boolean;
}

interface PhantomProvider {
    publicKey: PublicKey | null;
    isConnected: boolean | null;
    signTransaction: (transaction: Transaction) => Promise<Transaction>;
    signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
    signMessage: (message: Uint8Array | string, display?: DisplayEncoding) => Promise<any>;
    connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
    disconnect: () => Promise<void>;
    on: (event: PhantomEvent, handler: (args: any) => void) => void;
    request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}

export function PhantomWallet(): JSX.Element {

    const [provider, setProvider] = useState<PhantomProvider | undefined>(undefined);
    const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>(undefined);

    useEffect(() => {
        const provider = getProvider();

        if (provider) setProvider(provider);
        else setProvider(undefined);
    }, []);

    const getProvider = (): PhantomProvider | undefined => {
        if ("solana" in window) {
            // @ts-ignore
            const provider = window.solana as any;
            if (provider.isPhantom) return provider as PhantomProvider;
        }
    };

    const connectWallet = async () => {
        // @ts-ignore
        const { solana } = window;
    
        if (solana) {
            try {
                const response = await solana.connect();
                console.log('Wallet Account : ', response.publicKey.toString());
                setWalletKey(response.publicKey.toString());
            } catch (err) {
                // { code: 4001, message: 'User rejected the request.' }
            }
        }
    };

    const disconnectWallet = async () => {
        // @ts-ignore
        const { solana } = window;

        if (walletKey && solana) {
            await (solana as PhantomProvider).disconnect();
            setWalletKey(undefined);
        }
    };

    return(
        <div className=''>
            { provider && !walletKey && (
                <button 
                    className="bg-betana_sky_blue hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md"
                    onClick={ connectWallet }
                >
                    Connect to Wallet
                </button>
            )}

            {provider && walletKey && (
                <div>
                    <button
                        className="bg-red-700 hover:bg-betana_red text-white font-semibold py-2 px-12 rounded-md"
                        onClick={disconnectWallet}
                    >
                        Disconnect
                    </button>
                </div>
            )}

            { !provider && (
                <p>
                    No provider found. Install{" "}
                    <a href="https://phantom.app/">Phantom Browser extension</a>
                </p>
            )}
        </div>
    );
    
}