# 🔥 Food Dump

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

  const base = new URL(
    "../../JPG_VID/",
    window.location.href
  );

  const manifestURL = new URL(
    "food-manifest.json",
    base
  );

  const pageSize = 48;
  let files = [];
  let displayed = 0;

  const imagePattern = /\.(jpg|jpeg|png|webp|gif)$/i;
  const videoPattern = /\.(mp4|webm)$/i;

  function orderedFiles() {
    return [...files].sort((a, b) =>
      sort.value === "newest"
        ? b.localeCompare(a)
        : a.localeCompare(b)
    );
  }

  function createItem(filename) {
    const url = new URL(
      encodeURIComponent(filename),
      base
    ).href;

    const link = document.createElement("a");
    link.className = "food-item";
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.title = filename;

    if (videoPattern.test(filename)) {
      const video = document.createElement("video");
      video.src = url;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", filename);

      const label = document.createElement("span");
      label.className = "food-video-label";
      label.textContent = "VIDEO";

      link.append(video, label);
    } else {
      const img = document.createElement("img");
      img.src = url;
      img.alt = "Food photograph";
      img.loading = "lazy";
      img.decoding = "async";

      link.appendChild(img);
    }

    return link;
  }

  function loadMore() {
    const ordered = orderedFiles();
    const next = ordered.slice(
      displayed,
      displayed + pageSize
    );

    const fragment = document.createDocumentFragment();

    next.forEach(filename => {
      fragment.appendChild(createItem(filename));
    });

    gallery.appendChild(fragment);
    displayed += next.length;

    more.hidden = displayed >= ordered.length;
  }

  function resetGallery() {
    gallery.replaceChildren();
    displayed = 0;
    loadMore();
  }

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
