<style>
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
      src="/alvin-beyond/JPG_VID/WhatsApp%20Image%202026-11-21%20at%2018.44.50.jpeg"
      alt="Outdoor activities"
      loading="lazy"
    />
    <img
      src="/alvin-beyond/JPG_VID/sail1.jpeg"
      alt="Sailing"
      loading="lazy"
    />



  </div>

  <!-- Right: Introduction -->
  <div class="hero-text-card">

    <div class="hero-text">

     
    <p><strong>I'm Alvin.</strong></p>
    
    <p>
      Originally from Taiwan, I've spent much of my life
      moving between Asia, Europe and North America —
      studying, working, travelling and finding reasons
      to explore somewhere new.
    </p>
    
    <p>
      I've never been particularly interested in following
      a fixed itinerary, whether in travel or in life.
      Sometimes that means crossing borders by train,
      spending an afternoon somewhere unfamiliar, or
      making a detour simply because something caught
      my attention. Other times, it's attending a major
      sporting event, getting out on the water, or
      discovering a place worth returning to.
    </p>
    
    <p>
      I enjoy the contrast between big cities and quieter
      corners, familiar routines and unexpected experiences.
      Railways, aviation, sport, music, food and the everyday
      character of different places have all given me
      plenty of reasons to keep exploring.
    </p>
    
    <p>
      This site is a personal atlas of those experiences —
      not a checklist of destinations, but a collection
      of places, moments and journeys I've found
      worth remembering.
    </p>

</div>


  </div>
</div>

