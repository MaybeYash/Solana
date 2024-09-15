import Wallet from '../components/Wallet';

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-background">
      <div className="max-w-lg w-full p-6">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Solana Wallet
        </h1>
        <Wallet />
      </div>
    </div>
  );
}
