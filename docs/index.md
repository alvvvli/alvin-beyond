
<style>
/* =========================================
   HOMEPAGE HERO
   ========================================= */

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto 28px;
  text-align: center;
  font-family: "IBM Plex Sans", sans-serif;
}

/* Hero image */
.hero__imgbox {
  width: 100%;
  text-align: center;
}

.hero__img {
  display: block;
  width: 280px;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

/* Image attribution */
.hero__caption,
.hero__imgbox p.hero__caption {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #9bbcae;
  margin: 8px 0 0;
  text-align: center;
}

.hero__caption a {
  color: #a5dfbf;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* =========================================
   TEXT CONTENT
   ========================================= */

.hero__body {
  width: 100%;
  max-width: 700px;
  min-width: 0;
  text-align: left;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 16px;
  line-height: 1.65;
}

.hero__body p {
  font-size: 16px;
  line-height: 1.65;
  margin: 0 0 14px;
}

/* Intro heading */
.hero__body p:first-child {
  font-size: 21px;
  line-height: 1.35;
  margin-bottom: 18px;
}

.hero__body p:first-child strong {
  font-size: inherit;
  font-weight: 700;
}

/* =========================================
   LIST FORMATTING
   ========================================= */

.hero__body ul {
  padding-left: 22px;
  margin: 16px 0;
  list-style-position: outside;
}

.hero__body li {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px;
}

.hero__body li strong {
  font-weight: 600;
  color: #d4f5e1;
}

/* Links */
.hero__body a {
  color: #81d6aa;
}

.hero__body a:hover {
  color: #b7f0ce;
}

/* =========================================
   TABLET
   ========================================= */

@media (max-width: 900px) {
  .hero {
    gap: 20px;
  }

  .hero__body {
    max-width: 640px;
  }
}

/* =========================================
   MOBILE
   ========================================= */

@media (max-width: 768px) {
  .hero {
    gap: 18px;
    margin-bottom: 24px;
  }

  .hero__img {
    width: 60%;
    max-width: 280px;
  }

  .hero__body {
    width: 100%;
    text-align: left;
    font-size: 15px;
    line-height: 1.6;
  }

  .hero__body p,
  .hero__body li {
    font-size: 15px;
    line-height: 1.6;
  }

  .hero__body p:first-child {
    font-size: 20px;
  }

  .hero__body ul {
    padding-left: 20px;
  }

  .hero__caption,
  .hero__imgbox p.hero__caption {
    font-size: 11px;
  }
}
</style>

# A Personal Atlas

<div class="hero">

  <div class="hero__imgbox">
    <img
      src="assets/yomori-512.png"
      alt="Character illustration from Kaiju No. 8"
      class="hero__img"
    />

    <p class="hero__caption">
      Image source:
      <a
        href="https://kaiju-no8.net/"
        target="_blank"
        rel="noopener noreferrer"
      >Kaiju No. 8 — Official Website</a>
    </p>
  </div>

  <div class="hero__body">

    <p>
      <strong>Places, Journeys &amp; Experiences.</strong>
    </p>

    <p>
      I've spent time living, studying, working, and travelling
      across different parts of the world. Taiwan, California,
      the Netherlands, Denmark, and Singapore have been recurring
      bases, with shorter journeys and detours in between.
    </p>

    <p>
      This site collects those experiences beyond an itinerary:
      places explored by rail and on foot, food encountered
      along the way, sporting activities, live performances,
      and events worth remembering. Some trips were planned
      around a particular occasion; others were simply
      opportunities to see somewhere new.
    </p>

    <ul>
      <li>
        <strong>Travels:</strong>
        Country and city journals, regional journeys,
        photographs, and an interactive global mobility map.
      </li>

      <li>
        <strong>Activities &amp; Experiences:</strong>
        Running, skiing, outdoor excursions, food discoveries,
        concerts, motorsport, and football.
      </li>

      <li>
        <strong>Personal Archive:</strong>
        A growing collection of images, videos, event notes,
        and reflections, organised by place and occasion.
      </li>
    </ul>

  </div>

</div>
