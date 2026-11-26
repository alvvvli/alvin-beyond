
# 🍽️ Food Reels

<div class="reels-gallery">

  <div class="reel-card">
    <blockquote class="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/reel/DgKzVajvka1/"
      data-instgrm-version="14"></blockquote>
  </div>
  
  <div class="reel-card">
    <blockquote class="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/reel/DfmwRqjPl2h/"
      data-instgrm-version="14"></blockquote>
  </div>

  <div class="reel-card">
    <blockquote class="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/reel/DcXbUn2pffG/"
      data-instgrm-version="14"></blockquote>
  </div>

  <div class="reel-card">
    <blockquote class="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/reel/DcPuTjLyeuh/"
      data-instgrm-version="14"></blockquote>
  </div>

  <div class="reel-card">
    <blockquote class="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/reel/DcDTTpxvfzF/"
      data-instgrm-version="14"></blockquote>
  </div>

  <div class="reel-card">
    <blockquote class="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/reel/Db2PZlePZGO/"
      data-instgrm-version="14"></blockquote>
  </div>

  <div class="reel-card">
    <blockquote class="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/reel/Dbr0jQvyJt2/"
      data-instgrm-version="14"></blockquote>
  </div>

  <div class="reel-card">
    <blockquote class="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/reel/Dbm6B79w0-u/"
      data-instgrm-version="14"></blockquote>
  </div>

  <div class="reel-card">
    <blockquote class="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/reel/DbNYPuSRX2x/"
      data-instgrm-version="14"></blockquote>
  </div>

  <div class="reel-card">
    <blockquote class="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/reel/Da4jFySN4bU/"
      data-instgrm-version="14"></blockquote>
  </div>

</div>

<style>
/* Food Reels gallery */
.reels-header {
  margin: 18px 0 22px;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 13px;
  color: #a5cbb8;
}

.reels-gallery {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: start;
  gap: 16px;
  width: 100%;
  margin: 20px 0 36px;
}

.reel-card {
  min-width: 0;
  overflow: hidden;
  border-radius: 12px;
  background: #132a22;
  padding: 4px;
}

/* Instagram's embed markup */
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

/* Tablet */
@media (max-width: 1100px) {
  .reels-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }
}

/* Mobile */
@media (max-width: 650px) {
  .reels-gallery {
    grid-template-columns: minmax(0, 1fr);
    gap: 18px;
  }

  .reel-card {
    max-width: 440px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>

<script async
  src="https://www.instagram.com/embed.js">
</script>

<script>
(function () {
  function initialiseInstagram() {
    if (window.instgrm &&
        window.instgrm.Embeds &&
        typeof window.instgrm.Embeds.process === "function") {
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
