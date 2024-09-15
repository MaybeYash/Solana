import { useState } from 'react';

export default function Send() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = () => {
  };

  return (
    <div className="space-y-2">
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="w-full p-2 bg-gray-800 text-white rounded-md"
      />
      <input
        type="number"
        placeholder="Amount (SOL)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 bg-gray-800 text-white rounded-md"
      />
      <button
        onClick={handleSend}
        className="w-full bg-secondary py-2 px-4 rounded-md shadow hover:bg-opacity-80"
      >
        Send SOL
      </button>
    </div>
  );
}
