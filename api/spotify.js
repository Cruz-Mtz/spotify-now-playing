import { getAccessToken, getNowPlaying } from "./lib/spotify.js";

const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

export default async function handler(req, res) {

    // ===== CORS =====
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
    // ================

    try {

        const tokenData = await getAccessToken(REFRESH_TOKEN);

        if (!tokenData.access_token) {
            return res.status(500).json({
                error: "No se pudo obtener el Access Token.",
                details: tokenData,
            });
        }

        const response = await getNowPlaying(tokenData.access_token);

        if (response.status === 204 || response.status >= 400) {
            return res.status(200).json({
                isPlaying: false,
            });
        }

        const song = await response.json();

        return res.status(200).json({
            isPlaying: song.is_playing,
            title: song.item.name,
            artist: song.item.artists
                .map((artist) => artist.name)
                .join(", "),
            album: song.item.album.name,
            albumImage: song.item.album.images[0]?.url,
            songUrl: song.item.external_urls.spotify,
            progress: song.progress_ms,
            duration: song.item.duration_ms,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            error: error.message,
        });
    }
}
