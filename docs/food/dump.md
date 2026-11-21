# 🔥Food Dump

A photographic record of meals, snacks, cafés, street food and occasional discoveries along the way.

No rankings, reviews or particular order of importance — just a growing archive of things I've tried.

<div class="food-controls">
  <span id="food-count">Loading archive...</span>

  <select id="food-sort" aria-label="Sort food archive">
    <option value="newest">Newest first</option>
    <option value="oldest">Oldest first</option>
  </select>
</div>

<div id="food-gallery" class="food-grid"></div>

<div class="food-more">
  <button id="food-load-more" type="button" hidden>
    Load more
  </button>
</div>


<!-- Full-screen food gallery viewer -->
<div
  id="food-lightbox"
  class="food-lightbox"
  role="dialog"
  aria-modal="true"
  aria-label="Food gallery viewer"
  aria-hidden="true"
  hidden
>
  <button
    id="food-close"
    class="food-lightbox-close"
    type="button"
    aria-label="Close viewer"
  >×</button>

  <button
    id="food-prev"
    class="food-lightbox-nav food-lightbox-prev"
    type="button"
    aria-label="Previous item"
  >&#10094;</button>

  <div
    id="food-lightbox-content"
    class="food-lightbox-content"
  ></div>

  <button
    id="food-next"
    class="food-lightbox-nav food-lightbox-next"
    type="button"
    aria-label="Next item"
  >&#10095;</button>

  <div id="food-lightbox-counter" class="food-lightbox-counter"></div>
</div>

<style>
/* Food Dump controls */
.food-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin: 22px 0;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 14px;
  color: #b9d9c8;
}

.food-controls select {
  background: #153e31;
  color: #e3f5e9;
  border: 1px solid #398464;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
}

/* Photo gallery */
.food-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 9px;
}

.food-item {
  position: relative;
  display: block;
  overflow: hidden;
  aspect-ratio: 1;
  border-radius: 8px;
  background: #173b2f;
}

.food-item img,
.food-item video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s ease;
}

.food-item:hover img,
.food-item:hover video {
  transform: scale(1.04);
}

/* Video marker */
.food-video-label {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 4px 7px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.65);
  color: white;
  font-size: 12px;
  pointer-events: none;
}

/* Pagination */
.food-more {
  text-align: center;
  margin: 28px 0;
}

#food-load-more {
  background: #216c50;
  color: #fff;
  border: 1px solid #54a47e;
  border-radius: 8px;
  padding: 10px 24px;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 14px;
  cursor: pointer;
}

#food-load-more:hover {
  background: #2b8864;
}

/* Tablet */
@media (max-width: 900px) {
  .food-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

 
/* =========================================
   FULL-SCREEN FOOD LIGHTBOX
   ========================================= */

.food-lightbox[hidden] {
  display: none !important;
}

.food-lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(5, 12, 9, 0.96);
  backdrop-filter: blur(8px);
}

.food-lightbox-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 120px);
  height: calc(100% - 110px);
}

.food-lightbox-content img,
.food-lightbox-content video {
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 6px;
  box-shadow: 0 8px 36px rgba(0, 0, 0, 0.45);
}

.food-lightbox-content video {
  background: #000;
}

/* Close button */
.food-lightbox-close {
  position: absolute;
  top: 18px;
  right: 24px;
  z-index: 2;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 38px;
  line-height: 1;
  cursor: pointer;
}

/* Previous / next buttons */
.food-lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 48px;
  height: 60px;
  border: none;
  border-radius: 8px;
  background: rgba(35, 90, 65, 0.45);
  color: #fff;
  font-size: 26px;
  cursor: pointer;
}

.food-lightbox-nav:hover {
  background: rgba(46, 125, 91, 0.85);
}

.food-lightbox-prev {
  left: 18px;
}

.food-lightbox-next {
  right: 18px;
}

/* Image counter */
.food-lightbox-counter {
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);
  color: #b9d9c8;
  font-family: "IBM Plex Mono", monospace;
  font-size: 13px;
}

/* Make gallery thumbnails interactive */
.food-item {
  cursor: zoom-in;
}

/* Mobile */
@media (max-width: 600px) {
  .food-lightbox-content {
    width: calc(100% - 24px);
    height: calc(100% - 140px);
  }

  .food-lightbox-nav {
    top: auto;
    bottom: 65px;
    transform: none;
    width: 42px;
    height: 44px;
  }

  .food-lightbox-prev {
    left: 20px;
  }

  .food-lightbox-next {
    right: 20px;
  }

  .food-lightbox-close {
    top: 14px;
    right: 18px;
  }
}
 
/* Mobile */
@media (max-width: 600px) {
  .food-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6px;
  }

  .food-controls {
    font-size: 13px;
  }
}
</style>


<script>
(function () {
  const gallery = document.getElementById("food-gallery");
  const count = document.getElementById("food-count");
  const sort = document.getElementById("food-sort");
  const more = document.getElementById("food-load-more");

  const lightbox = document.getElementById("food-lightbox");
  const content = document.getElementById("food-lightbox-content");
  const closeBtn = document.getElementById("food-close");
  const prevBtn = document.getElementById("food-prev");
  const nextBtn = document.getElementById("food-next");
  const counter = document.getElementById("food-lightbox-counter");

  const base = new URL(
    "../../JPG_VID/",
    window.location.href
  );

  const manifestURL = new URL(
    "food-manifest.json",
    base
  );

  const pageSize = 48;
  const imagePattern = /\.(jpg|jpeg|png|webp|gif)$/i;
  const videoPattern = /\.(mp4|webm)$/i;

  let files = [];
  let displayed = 0;
  let currentIndex = 0;
  let previousFocus = null;

  function orderedFiles() {
    return [...files].sort((a, b) =>
      sort.value === "newest"
        ? b.localeCompare(a)
        : a.localeCompare(b)
    );
  }

  function mediaURL(filename) {
    return new URL(
      encodeURIComponent(filename),
      base
    ).href;
  }

  function createItem(filename, index) {
    const url = mediaURL(filename);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "food-item";
    button.title = filename;
    button.setAttribute("aria-label", "View " + filename);

    /* Reset browser button styling */
    button.style.padding = "0";
    button.style.border = "none";
    button.style.cursor = "zoom-in";

    if (videoPattern.test(filename)) {
      const video = document.createElement("video");
      video.src = url;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";

      const label = document.createElement("span");
      label.className = "food-video-label";
      label.textContent = "VIDEO";

      button.append(video, label);
    } else {
      const img = document.createElement("img");
      img.src = url;
      img.alt = filename;
      img.loading = "lazy";
      img.decoding = "async";

      button.appendChild(img);
    }

    button.addEventListener("click", () => {
      openLightbox(index);
    });

    return button;
  }

  function loadMore() {
    const ordered = orderedFiles();

    const next = ordered.slice(
      displayed,
      displayed + pageSize
    );

    const fragment = document.createDocumentFragment();

    next.forEach((filename, offset) => {
      fragment.appendChild(
        createItem(filename, displayed + offset)
      );
    });

    gallery.appendChild(fragment);
    displayed += next.length;

    more.hidden = displayed >= ordered.length;
  }

  function resetGallery() {
    closeLightbox();
    gallery.replaceChildren();
    displayed = 0;
    loadMore();
  }

  function showMedia() {
    const ordered = orderedFiles();
    const filename = ordered[currentIndex];

    if (!filename) return;

    const url = mediaURL(filename);

    content.replaceChildren();

    if (videoPattern.test(filename)) {
      const video = document.createElement("video");
      video.src = url;
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";

      content.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = url;
      img.alt = filename;

      content.appendChild(img);
    }

    counter.textContent =
      `${currentIndex + 1} / ${ordered.length}`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === ordered.length - 1;
  }

  function openLightbox(index) {
    previousFocus = document.activeElement;
    currentIndex = index;

    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    showMedia();
    closeBtn.focus();
  }

  function closeLightbox() {
    if (lightbox.hidden) return;

    content.replaceChildren();
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    if (previousFocus && previousFocus.isConnected) {
      previousFocus.focus();
    }

    previousFocus = null;
  }

  function navigate(direction) {
    const total = orderedFiles().length;
    const next = currentIndex + direction;

    if (next < 0 || next >= total) return;

    currentIndex = next;
    showMedia();
  }

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => navigate(-1));
  nextBtn.addEventListener("click", () => navigate(1));

  /* Click outside the media to close */
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  /* Keyboard navigation */
  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;

    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowLeft") {
      navigate(-1);
    } else if (event.key === "ArrowRight") {
      navigate(1);
    }
  });

  sort.addEventListener("change", resetGallery);
  more.addEventListener("click", loadMore);

  fetch(manifestURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Manifest unavailable");
      }

      return response.json();
    })
    .then(data => {
      if (!Array.isArray(data)) {
        throw new Error("Invalid manifest");
      }

      files = data.filter(filename =>
        typeof filename === "string" &&
        !filename.includes("/") &&
        !filename.includes("\\") &&
        !filename.startsWith(".") &&
        (imagePattern.test(filename) ||
         videoPattern.test(filename))
      );

      const images = files.filter(
        name => imagePattern.test(name)
      ).length;

      const videos = files.filter(
        name => videoPattern.test(name)
      ).length;

      count.textContent =
        `${images} photos · ${videos} videos`;

      resetGallery();
    })
    .catch(error => {
      count.textContent = "Unable to load food archive";
      console.error("Food Dump:", error);
    });
})();
</script>
