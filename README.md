# MapLibre-Control-ZoomHome

A MapLibre control to add a Home button to your map. Clicking it resets the map view to a specified center & zoom, or to an extent.

Demo = https://greeninfo-network.github.io/MapLibre-Control-ZoomHome/

Github = https://github.com/GreenInfo-Network/MapLibre-Control-ZoomHome/


## Usage

```
const zoomhome = new MapLibreControlZoomHome({
    // use a LngLatBounds or LngLatBoundsLike
    resetBounds: [[-24.5525, 28.36838], [19.77906, 49.82957]],
    /*
    // use a LatLng or LatLngLike plus a zoom
    resetLngLat: [100.66541, 16.15097],
    resetZoom: 4,
    */
});
MAP.addControl(zoomhome, 'top-right');
```

Constructor parameters:

* `resetBounds` -- A LngLatBounds or a `[[w, s], [e, n]]` literal. When clicked, the map will reset to these bounds.
  * Use either `resetBounds` or `resetLngLat` but not both.
* `resetLngLat` -- A LngLat or a `[lng, lat]` literal. When clicked, the map will reset to this LngLat center.
  * Use either `resetBounds` or `resetLngLat` but not both.
  * See also `resetZoom`
* `resetZoom` -- Number, the zoom level to use when resetting to a `resetLngLat`. Only meaningful when `resetLngLat` is used. Default is 1.
* `tooltipText` -- Text for the tooltip if the mouse is held over the button. Default is "Reset map view"


## Development

Fire up a Python CLI web server via `python -m SimpleHTTPServer 5784` or `python3 -m http.server 5784`

You can now point a browser at http://localhost:5784/ and see the demo.
