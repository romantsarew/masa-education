/* eslint-disable no-undef */
function mapInit() {
  const mapElement = document.getElementById('map');
  if (mapElement) {
    const map = L.map('map', {scrollWheelZoom: false}).setView(
        [55.028343, 82.927639],
        15
    );

    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }).addTo(map);

    const basicIcon = L.icon({
      iconUrl: 'img/svg/point-map.svg',
      iconSize: [51, 70],
    });

    L.marker([55.028543, 82.928145], {icon: basicIcon}).addTo(map);
  }
}

export {mapInit};
