export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send("No se recibió ningún código.");
  }

  res.status(200).send(`
    <h1>¡Autorización recibida! 🎉</h1>
    <p>Código:</p>
    <pre>${code}</pre>
  `);
}
