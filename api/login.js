export default async function handler(req, res) {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope: "user-read-currently-playing user-read-playback-state",
    redirect_uri: "https://spotify-now-playing-rho-self.vercel.app/api/callback",
  });

  res.redirect(
    `https://accounts.spotify.com/authorize?${params.toString()}`
  );
}
