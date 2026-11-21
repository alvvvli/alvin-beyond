# Global Mobility Map

An interactive record of places I've visited, with **documented visits**, **additional personal records**, and **connections requiring confirmation** shown separately. Markers are approximate reference locations, **not GPS tracks or precise visit coordinates**.

<div class="map-controls"><label for="continent-select">Region</label><select id="continent-select"><option value="all">All regions</option></select><label for="status-select">Evidence</label><select id="status-select"><option value="all">All records</option><option value="documented">JYZ-documented</option><option value="other">Additional record</option><option value="transit">Connection / unconfirmed entry</option></select><input id="place-search" type="search" placeholder="Search country or place" aria-label="Search places" /></div>
<div id="travel-map" role="application" aria-label="Interactive travel map"></div>
<p class="journal-meta" id="map-count" aria-live="polite"></p>
<div id="map-list" class="map-directory"></div>

!!! info "How this map is maintained"
    This map uses OpenStreetMap tiles through Leaflet, with no API key. The map needs an internet connection to load its tiles. All travel entries are stored in `docs/assets/data/travel-places.json`; update that file to add or correct a location. Airport-only connections are not automatically counted as country visits.

!!! note "Privacy"
    Locations are approximate city or regional reference points. Private accommodation addresses, confirmation codes, flight booking identifiers and personal contact details are not published.

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyo1vQ9pP0N2j5Q=" crossorigin="anonymous">
<script defer src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin="anonymous"></script>
<script defer src="../assets/js/travel-map.js"></script>
