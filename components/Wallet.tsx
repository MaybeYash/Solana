import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { useState, useEffect } from 'react';
import { SendIcon, SwapIcon, QRCodeIcon } from '@heroicons/react/solid';
import Receive from './Receive';
import Send from './Send';
import Swap from './Swap';
import QRScanner from './QRScanner';

export default function Wallet() {
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (publicKey) {
    }
  }, [publicKey]);

  return (
    <div className="p-6 bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-lg space-y-6">
      <WalletMultiButton className="bg-white text-black font-bold rounded-lg px-4 py-2" />
      {publicKey && (
        <>
          <div>
            <h2 className="text-lg font-bold">Wallet Address</h2>
            <p className="break-all">{publicKey.toBase58()}</p>
            <p className="mt-2 text-lg">Balance: {balance} SOL</p>
          </div>
          <div className="space-y-4 mt-4">
            <Receive />
            <Send />
            <Swap />
            <QRScanner />
          </div>
        </>
      )}
    </div>
  );
}
