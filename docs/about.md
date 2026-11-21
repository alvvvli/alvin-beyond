
<style>
/* About page hero */
.hero {
  display: grid;
  grid-template-columns: 210px minmax(0, 1fr);
  align-items: start;
  gap: 28px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto 28px;
}

/* Image column */
.hero-images {
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 0;
}

.hero-images img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
}

/* Text column */
.hero-text {
  min-width: 0;
  text-align: left;
  line-height: 1.7;
}

.hero-text p {
  margin: 0 0 16px;
}

.hero-text p:first-child {
  font-size: 1.25rem;
  margin-bottom: 18px;
}

/* Green badge pills */
.badge-cluster {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 18px 0;
}

.badge-cluster span {
  background: rgba(46, 125, 91, 0.18);
  color: #a5dfbf;
  border: 1px solid rgba(91, 173, 128, 0.45);
  padding: 5px 11px;
  border-radius: 12px;
  font-size: 0.78rem;
  font-family: "IBM Plex Mono", monospace;
  white-space: nowrap;
  transition: background 0.2s, border-color 0.2s;
}

.badge-cluster span:hover {
  background: rgba(46, 125, 91, 0.32);
  border-color: #81c995;
}

/* Tablet */
@media (max-width: 900px) {
  .hero {
    grid-template-columns: 180px minmax(0, 1fr);
    gap: 20px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .hero-images {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }

  .hero-images img {
    width: 100%;
    height: 170px;
    object-fit: cover;
    object-position: center;
  }

  .hero-text {
    width: 100%;
    text-align: left;
  }

  .badge-cluster {
    justify-content: flex-start;
  }
}

@media (max-width: 400px) {
  .hero-images img {
    height: 125px;
  }
}
</style>

<div class="hero">

<div class="hero-images">
<img src="/alvin-beyond/JPG_VID/sail1.jpeg">
<img src="/alvin-beyond/JPG_VID/WhatsApp Image 2026-11-21 at 18.44.48 (1).jpeg">
<img src="/alvin-beyond/JPG_VID/WhatsApp Image 2026-11-21 at 18.44.50.jpeg">
</div>

<div class="hero-text">

<p><strong>I'm Alvin.</strong></p>
<p>Originally from Taiwan, with much of my life spent moving between Asia, Europe and North America.</p>

<p>Over the years, I've had the opportunity to live, study and work in different places, with plenty of independent journeys in between. Some trips have taken me to major cities and international events; others have involved quieter excursions, unfamiliar train routes, local restaurants and places I simply wanted to see for myself.</p>

<p>Outside of travelling, I enjoy running, cycling, skiing, sailing and exploring different sports. I'm also keen on football, Formula 1, live music and trying local food wherever I happen to be.</p>

<p>This site brings together a selection of those experiences, from sporting events and concerts to everyday discoveries, photographs and journeys worth remembering.</p>
