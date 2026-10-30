/* One base map for every Leaflet map on the site. OpenStreetMap's own tiles
 * need no key (CARTO's started returning "API key required" in 2026). */
export const TILE_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
export const TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
export const TILE_MAX_ZOOM = 19;
