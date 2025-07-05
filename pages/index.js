
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');


  const res = await fetch('/api/qbo', { method: 'GET' }); // download
const res = await fetch('/api/qbo', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ id: 123, name: 'Test' }),
}); // upload

  return (
    <div style={{ padding: 20 }}>
      <h1>QuickBooks API Interface</h1>
      <button onClick={handleDownload}>Download from QBO</button>
      <button onClick={handleUpload}>Upload to QBO</button>
      <p><b>Upload status:</b> {uploadStatus}</p>
      <ul>
        {data.map(d => <li key={d.id}>{d.name}</li>)}
      </ul>
    </div>
  );
}
