module.exports = (req, res) => {
  if (req.method === 'GET') {
    // Simulate download
    res.status(200).json({ data: [{ id: 1, name: "Sample Customer" }] });
  } else if (req.method === 'POST') {
    // Simulate upload
    res.status(200).json({ status: "uploaded", payload: req.body });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

