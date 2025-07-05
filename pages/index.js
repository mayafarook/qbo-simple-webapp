
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleDownload = async () => {
    const res = await fetch('/api/qbo/download');
    const json = await res.json();
    setData(json.data);
  };

  const handleUpload = async () => {
    const res = await fetch('/api/qbo/upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'New Customer', id: 123 })
    });
    const json = await res.json();
    setUploadStatus(json.status);
  };

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
