class MapLibreControlZoomHome {
    constructor(options) {
        this.options = Object.assign({
            resetBounds: null, // LngLatBounds or LngLatBoundsLike
            resetLngLat: null, // LatLng or LatLngLike
            resetZoom: 1, // number, zoom level; useful only with resetLngLat
            tooltipText: "Reset map view",
        }, options);

        if (! this.options.resetBounds && ! this.options.resetLngLat) throw new Error('MapLibreControlZoomHome requires resetBounds or resetLngLat');
    }

    onAdd (map) {
        this._map = map;

        const div = document.createElement('div');
        div.className = 'mapboxgl-ctrl mapboxgl-ctrl-group maplibre-control-zoomhome';

        const button = document.createElement('button');
        button.type = 'button';
        button.title = this.options.tooltipText;

        const icon = document.createElement('img');
        icon.setAttribute('src', './home.svg');
        icon.setAttribute('alt', this.options.tooltipText);

        button.appendChild(icon);

        button.addEventListener('click', () => {
            this.resetMapView();
        });

        div.appendChild(button);

        return div;
    }

    onRemove() {
        this._map = undefined;
    }

    resetMapView () {
        if (this.options.resetBounds) {
            this._map.fitBounds(this.options.resetBounds);
        } else if (this.options.resetLngLat) {
            this._map.setZoom(this.options.resetZoom).setCenter(this.options.resetLngLat);
        }
    }
}
