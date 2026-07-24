/* Importamos tus fuentes originales */
@import url('https://fonts.googleapis.com/css2?family=Metal+Mania&family=Bebas+Neue&family=Special+Elite&family=Permanent+Marker&display=swap');

:root {
    --purple: #9b3ff0;
    --purple-glow: #b876ff;
    --muted: rgba(236, 229, 211, .5);
    --text: #F4F4F4;

    /* Tus variables de tipografía */
    --f-display: 'Metal Mania', cursive;
    --f-label: 'Bebas Neue', sans-serif;
    --f-body: 'Special Elite', 'Courier New', monospace;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--f-body);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: transparent;
    color: var(--text);
    container-type: size;
    container-name: widget;
}

.player-content-only {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.content {
    flex: 1;
    display: flex;
    overflow: hidden;
    padding: 15px;
    gap: 15px;
}

#cover {
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
    width: 80px;
    height: 80px;
    z-index: 1;
}

.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
}

.label {
    font-family: var(--f-label);
    font-size: 0.85rem;
    letter-spacing: 2px;
    color: var(--purple-glow);
    margin: 4px 0 0;
    text-transform: uppercase;
}

#song {
    font-family: var(--f-display);
    font-size: 1.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: normal;
    text-shadow: 2px 2px 0 #000;
}

#artist {
    font-family: var(--f-body);
    font-size: 0.95rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

#album {
    font-family: var(--f-body);
    color: var(--muted);
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.progress-area {
    padding: 0 15px 15px;
    display: flex;
    flex-direction: column;
    z-index: 10;
    background: transparent;
}

.progress {
    height: 6px;
    background: rgba(10, 9, 8, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 999px;
    overflow: hidden;
}

#bar {
    width: 0;
    height: 100%;
    background: var(--purple);
    box-shadow: 0 0 10px var(--purple-glow);
    transition: width 0.2s linear;
}

.time {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    color: #9c9c9c;
    font-size: 0.75rem;
}

.spotify-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    padding: 8px 12px;
    border: 2px solid var(--purple);
    background: transparent;
    color: var(--purple-glow);
    font-family: var(--f-label);
    letter-spacing: 2px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 0.9rem;
    transition: .25s;
}

.spotify-button:hover {
    background: var(--purple);
    color: #0a0908;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.6);
}

/* ========================================= */
/* CONTAINER QUERIES (LA MAGIA DE LA VENTANA)*/
/* ========================================= */

/* 1. MODO BARRA HORIZONTAL */
@container widget (max-height: 200px) {
    #cover { width: 60px; height: 60px; }
    .label.album-label, #album, .spotify-button { display: none; }
}

/* 2. MODO TARJETA VERTICAL */
@container widget (min-height: 201px) and (max-width: 400px) {
    .content {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    #cover { width: 140px; height: 140px; }
}

/* 3. MODO GRANDE (ESTILO POSTER LOCALHOST) */
@container widget (min-height: 201px) and (min-width: 401px) {
    .content {
        position: relative;
        padding: 0;
        background: #0a0908;
        justify-content: center;
        align-items: center;
    }

    #cover {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: auto;
        height: 100%;
        aspect-ratio: 1 / 1;
        opacity: 0.75;
        border-radius: 0;
        object-fit: cover;
        box-shadow: none;
    }

    .info {
        position: absolute;
        bottom: 20px;
        left: 20px;
        z-index: 2;
        align-items: flex-start;
        text-align: left;
        background: rgba(10, 9, 8, 0.85);
        backdrop-filter: blur(6px);
        padding: 12px 16px;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        max-width: 65%;
    }

    #song {
        font-size: clamp(20px, 3.5vw, 32px);
        white-space: normal;
    }

    #artist {
        font-size: clamp(13px, 2.2vw, 18px);
        white-space: normal;
    }
}
