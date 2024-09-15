import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

export default function QRScanner() {
  const [data, setData] = useState('');

  return (
    <div className="space-y-4">
      <QrReader onResult={(result, error) => {
        if (!!result) {
          setData(result?.text || '');
        }
      }} className="w-full h-64 bg-gray-700 rounded-md" />
      {data && (
        <div className="p-4 bg-gray-800 rounded-md">
          <p>Scanned Address: {data}</p>
        </div>
      )}
    </div>
  );
}
