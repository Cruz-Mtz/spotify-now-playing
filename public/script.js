const API = "/api/spotify";

const background = document.getElementById("background");

const cover = document.getElementById("cover");

const song = document.getElementById("song");

const artist = document.getElementById("artist");

const album = document.getElementById("album");

const current = document.getElementById("current");

const duration = document.getElementById("duration");

const bar = document.getElementById("bar");

const spotify = document.getElementById("spotify");

const status = document.getElementById("status");

let progress = 0;
let total = 0;

function format(ms){

    const minutes = Math.floor(ms / 60000);

    const seconds = Math.floor((ms % 60000) / 1000);

    return `${minutes}:${String(seconds).padStart(2,"0")}`;

}

function updateProgress(){

    if(total <= 0) return;

    progress += 1000;

    if(progress > total){

        progress = total;

    }

    bar.style.width = `${progress / total * 100}%`;

    current.textContent = format(progress);

}

async function loadSong(){

    try{

        const response = await fetch(API);

        const data = await response.json();

        console.log(data);

        if(!data.isPlaying){

            status.textContent = "IDLE";

            song.textContent = "Nothing Playing";

            artist.textContent = "";

            album.textContent = "";

            cover.removeAttribute("src");

            background.style.backgroundImage = "none";

            bar.style.width = "0%";

            current.textContent = "0:00";

            duration.textContent = "0:00";

            return;

        }

        status.textContent = "LIVE";

        if(cover.src !== data.albumImage){

            cover.src = data.albumImage;

            background.style.backgroundImage = `url(${data.albumImage})`;

        }

        song.textContent = data.title;

        artist.textContent = data.artist;

        album.textContent = data.album;

        spotify.href = data.songUrl;

        progress = data.progress;

        total = data.duration;

        bar.style.width = `${progress / total * 100}%`;

        current.textContent = format(progress);

        duration.textContent = format(total);

    }

    catch(error){

        console.error(error);

        status.textContent = "ERROR";

        song.textContent = "Connection Error";

    }

}

loadSong();

setInterval(loadSong,5000);

setInterval(updateProgress,1000);
