const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send("No se recibió ningún código.");
  }

  const basic = Buffer.from(
    `${CLIENT_ID}:${CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri:
        "https://spotify-now-playing-rho-self.vercel.app/api/callback",
    }),
  });

  const data = await response.json();

  if (data.error) {
    return res.status(400).json(data);
  }

  res.status(200).send(`
    <h1>¡Todo salió bien! 🎉</h1>

    <h2>Refresh Token</h2>
    <pre>${data.refresh_token}</pre>

    <hr>

    <h2>Access Token</h2>
    <pre>${data.access_token}</pre>

    <p>Guarda el Refresh Token. Lo usaremos una sola vez.</p>
  `);
}
