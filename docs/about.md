<style>

.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
}

.hero-images {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 270px;
  flex-shrink: 0;
}

.hero-images img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0,0,0,0.4);
}

.hero-text {
  flex: 1;
  min-width: 240px;
}

/* Custom tag pills */
.badge-cluster {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
  margin-bottom: 15px;
}

.badge-cluster span {
  background-color: rgba(63, 81, 181, 0.16);
  color: #9fa8da;
  border: 1px solid rgba(92, 107, 192, 0.45);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.85em;
  font-family: monospace;
  white-space: nowrap;
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease,
    color 0.15s ease,
    transform 0.15s ease;
}

.badge-cluster span:hover {
  background-color: rgba(63, 81, 181, 0.28);
  border-color: #7986cb;
  color: #c5cae9;
  transform: translateY(-1px);
}

/* Mobile */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .hero-images {
    width: 60%;
    max-width: 320px;
  }

  .hero-images img {
    width: 100%;
  }

  .hero-text {
    text-align: center;
    width: 100%;
  }

  .badge-cluster {
    justify-content: center;
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
