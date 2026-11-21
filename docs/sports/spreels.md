
# ⚽ Sports Reels

A collection of sporting activities, matches and moments captured along the way.

<div class="reels-header">
  <span>4 reels · Instagram archive</span>
</div>

<div class="reels-gallery">

  <div class="reel-card">
    <blockquote
      class="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/reel/Df3jjiHvGqS/"
      data-instgrm-version="14">
    </blockquote>
  </div>

  <div class="reel-card">
    <blockquote
      class="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/reel/Dfi4Q3Ah12u/"
      data-instgrm-version="14">
    </blockquote>
  </div>

  <div class="reel-card">
    <blockquote
      class="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/reel/Dc_gIvsN7Fv/"
      data-instgrm-version="14">
    </blockquote>
  </div>

  <div class="reel-card">
    <blockquote
      class="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/reel/DcuUzXZyLEL/"
      data-instgrm-version="14">
    </blockquote>
  </div>

</div>

<style>
/* =========================================
   SPORTS REELS GALLERY
   ========================================= */

.reels-header {
  margin: 18px 0 22px;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 13px;
  color: #a5cbb8;
}

/* Two-column desktop layout */
.reels-gallery {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  gap: 20px;
  width: 100%;
  margin: 20px 0 36px;
}

/* Individual Reel container */
.reel-card {
  min-width: 0;
  overflow: hidden;
  border-radius: 12px;
  background: #132a22;
  padding: 4px;
}

/* Instagram embed */
.reel-card .instagram-media {
  width: 100% !important;
  min-width: 0 !important;
  max-width: 100% !important;
  margin: 0 auto !important;
  box-sizing: border-box !important;
}

.reel-card iframe {
  max-width: 100% !important;
}

/* Mobile */
@media (max-width: 750px) {
  .reels-gallery {
    grid-template-columns: minmax(0, 1fr);
    gap: 18px;
  }

  .reel-card {
    width: 100%;
    max-width: 440px;
    margin: 0 auto;
  }
}
</style>

<script
  async
  src="https://www.instagram.com/embed.js">
</script>

<script>
(function () {
  function initialiseInstagram() {
    if (
      window.instgrm &&
      window.instgrm.Embeds &&
      typeof window.instgrm.Embeds.process === "function"
    ) {
      window.instgrm.Embeds.process();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initialiseInstagram,
      { once: true }
    );
  } else {
    initialiseInstagram();
  }

  /* MkDocs Material instant navigation */
  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      initialiseInstagram();
    });
  }
})();
</script>
