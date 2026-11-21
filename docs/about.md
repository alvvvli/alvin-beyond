/* Two-column About layout */
.hero {
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr);
  align-items: start;
  gap: 28px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto 28px;
  background: transparent !important;
  padding: 0 !important;
  box-shadow: none !important;
}

/* Photographs: no green background */
.hero-images {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
  background: transparent;
}

.hero-images img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
}

/* Green card only behind the text */
.hero-text-card {
  min-width: 0;
  padding: 28px 30px;
  border-radius: 16px;
  background: linear-gradient(
    145deg,
    #10513e 0%,
    #177451 65%,
    #258c65 100%
  );
}

/* Text styling */
.hero-text {
  min-width: 0;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 16px;
  line-height: 1.65;
  text-align: left;
}

.hero-text p {
  font-size: 16px;
  line-height: 1.65;
  margin: 0 0 14px;
}

.hero-text p:first-child {
  font-size: 21px;
  line-height: 1.35;
  margin-bottom: 18px;
}

.hero-text p:last-child {
  margin-bottom: 0;
}

/* Tablet */
@media (max-width: 900px) {
  .hero {
    grid-template-columns: 210px minmax(0, 1fr);
    gap: 20px;
  }

  .hero-text-card {
    padding: 22px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
    gap: 22px;
  }

  .hero-images {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
  }

  .hero-images img {
    height: 170px;
    object-fit: cover;
    object-position: center;
  }

  .hero-text-card {
    padding: 22px 20px;
  }

  .hero-text p {
    font-size: 15px;
    line-height: 1.6;
  }

  .hero-text p:first-child {
    font-size: 20px;
  }
}

@media (max-width: 400px) {
  .hero-images img {
    height: 125px;
  }
}

</style>

<div class="hero">

  <!-- Left: Photographs -->
  <div class="hero-images">

    <img
      src="/alvin-beyond/JPG_VID/sail1.jpeg"
      alt="Sailing"
      loading="lazy"
    />

    <img
      src="/alvin-beyond/JPG_VID/WhatsApp%20Image%202026-11-21%20at%2018.44.49.jpeg"
      alt="Motorsport experience"
      loading="lazy"
    />

    <img
      src="/alvin-beyond/JPG_VID/WhatsApp%20Image%202026-11-21%20at%2018.44.50.jpeg"
      alt="Outdoor activities"
      loading="lazy"
    />

  </div>

  <!-- Right: Introduction -->
  <div class="hero-text-card">

    <div class="hero-text">

      <p><strong>I'm Alvin.</strong></p>

      <p>
        Originally from Taiwan, with much of my life spent
        moving between Asia, Europe and North America.
      </p>

      <p>
        Over the years, I've had the opportunity to live,
        study and work in different places, with plenty
        of independent journeys in between. Some trips
        have taken me to major cities and international
        events; others have involved quieter excursions,
        unfamiliar train routes, local restaurants and
        places I simply wanted to see for myself.
      </p>

      <p>
        Outside of travelling, I enjoy running, cycling,
        skiing, sailing and exploring different sports.
        I'm also keen on football, Formula 1, live music
        and trying local food wherever I happen to be.
      </p>

      <p>
        This site brings together a selection of those
        experiences, from sporting events and concerts
        to everyday discoveries, photographs and
        journeys worth remembering.
      </p>

    </div>

  </div>
</div>

