
# Food Dump

A visual archive of meals, snacks, cafés, street food and everything in between, collected across different places and years.

No rankings or reviews — just photographs from along the way.

<div class="food-dump-controls">
  <span id="food-count">Loading photographs...</span>
  <select id="food-sort" aria-label="Sort photographs">
    <option value="newest">Newest first</option>
    <option value="oldest">Oldest first</option>
  </select>
</div>

<div id="food-dump-gallery" class="food-dump-grid"></div>

<style>
.food-dump-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
  font-size: 14px;
}

.food-dump-controls select {
  padding: 8px 12px;
  border-radius: 8px;
  background: #153e31;
  color: #e3f5e9;
  border: 1px solid #398464;
}

.food-dump-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
}

.food-dump-grid a {
  display: block;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 1;
}

.food-dump-grid img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;
}

.food-dump-grid img:hover {
  transform: scale(1.04);
}

@media (max-width: 900px) {
  .food-dump-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .food-dump-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>

<script>
(function () {
  const gallery = document.getElementById("food-dump-gallery");
  const count = document.getElementById("food-count");
  const sort = document.getElementById("food-sort");

  const base = new URL("../../JPG_VID/", window.location.href);

  function render(files) {
    const ordered = [...files].sort((a, b) =>
      sort.value === "newest"
        ? b.localeCompare(a)
        : a.localeCompare(b)
    );

    gallery.replaceChildren();

    ordered.forEach((filename) => {
      const url = new URL(
        encodeURIComponent(filename),
        base
      ).href;

      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener";

      const img = document.createElement("img");
      img.src = url;
      img.alt = "Food photograph";
      img.loading = "lazy";
      img.decoding = "async";

      link.appendChild(img);
      gallery.appendChild(link);
    });

    count.textContent = `${files.length} photographs`;
  }

  fetch(new URL("food-manifest.json", base))
    .then((response) => {
      if (!response.ok) throw new Error("Manifest unavailable");
      return response.json();
    })
    .then((files) => {
      if (!Array.isArray(files)) {
        throw new Error("Invalid manifest");
      }
      render(files);
      sort.addEventListener("change", () => render(files));
    })
    .catch(() => {
      count.textContent = "Gallery unavailable";
    });
})();
</script>
