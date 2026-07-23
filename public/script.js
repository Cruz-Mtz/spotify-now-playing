:root{

--bg:#090909;

--panel:#111111ee;

--border:#2c2c2c;

--purple:#8B5CF6;

--text:#F2F2F2;

--muted:#888;

}

*{

margin:0;

padding:0;

box-sizing:border-box;

}

body{

font-family:"Rajdhani",sans-serif;

background:transparent;

display:flex;

justify-content:center;

align-items:center;

height:100vh;

overflow:hidden;

position:relative;

}

#background{

position:fixed;

inset:0;

background-position:center;

background-size:cover;

filter:blur(50px) brightness(.22) saturate(150%);

transform:scale(1.2);

transition:.8s;

z-index:-3;

}

.noise{

position:fixed;

inset:0;

opacity:.05;

background-image:url("https://grainy-gradients.vercel.app/noise.svg");

pointer-events:none;

z-index:-2;

}

.player{

width:820px;

background:var(--panel);

backdrop-filter:blur(20px);

border:1px solid rgba(255,255,255,.08);

box-shadow:

0 20px 70px rgba(0,0,0,.65);

border-radius:12px;

overflow:hidden;

}

header{

display:flex;

justify-content:space-between;

align-items:center;

padding:18px 28px;

border-bottom:1px solid rgba(255,255,255,.08);

letter-spacing:4px;

font-size:.8rem;

}

.status{

display:flex;

align-items:center;

gap:10px;

}

.dot{

width:10px;

height:10px;

border-radius:50%;

background:#ff3b3b;

box-shadow:0 0 10px #ff3b3b;

}

.content{

display:grid;

grid-template-columns:240px 1fr;

gap:35px;

padding:30px;

}

.cover img{

width:100%;

aspect-ratio:1;

object-fit:cover;

border-radius:8px;

box-shadow:0 10px 35px rgba(0,0,0,.45);

}

.label{

display:block;

font-size:.75rem;

letter-spacing:3px;

margin-top:10px;

margin-bottom:6px;

color:var(--purple);

}

#song{

font-size:2.2rem;

margin-bottom:12px;

}

#artist{

font-size:1.5rem;

font-weight:600;

margin-bottom:10px;

}

#album{

color:var(--muted);

font-size:1.1rem;

}

.progress-area{

padding:0 30px 30px;

}

.progress{

height:10px;

background:#242424;

border-radius:999px;

overflow:hidden;

}

#bar{

width:0;

height:100%;

background:linear-gradient(90deg,#8B5CF6,#B695FF);

transition:width .2s linear;

}

.time{

display:flex;

justify-content:space-between;

margin-top:10px;

color:#9c9c9c;

}

#spotify{

display:inline-block;

margin:0 30px 30px;

padding:14px 18px;

text-decoration:none;

color:white;

border:1px solid #8B5CF6;

border-radius:8px;

transition:.25s;

}

#spotify:hover{

background:#8B5CF6;

}
