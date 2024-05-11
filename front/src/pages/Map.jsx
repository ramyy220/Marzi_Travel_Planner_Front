import React, { useRef, useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import '../styles/map.css';

const TOKEN = "pk.eyJ1IjoidHlweWs1OSIsImEiOiJjbHNibXlleHkwM3Z2MmtvMWY4bTdpcm1oIn0.dwSALqYwPNS8c9RA_Raeaw";

const Map = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(3.9612);
    const [lat, setLat] = useState(47.5703);
    const [zoom, setZoom] = useState(2.30);

    useEffect(() => {
        if (map.current) return; 
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/typyk59/clvwzdkfv00zj01qu7tmvhw0y',
          center: [lng, lat],
          zoom: zoom,
          accessToken: TOKEN
        });

        map.current.on('load', () => {
            map.current.on('click', (event) => {
                const features = map.current.queryRenderedFeatures(event.point, {
                  layers: ['mtp'] 
                });
                if (features.length) {
                    const feature = features[0];
                    
                    new mapboxgl.Popup({ offset: [0, -15] })
                      .setLngLat(feature.geometry.coordinates)
                      .setHTML(`<h3>${feature.properties.title}</h3><p>${feature.properties.country}</p>`) 
                      .addTo(map.current);
                }
            });
        });

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    }, [lat, lng, zoom]);

    return (
        <Helmet title="Map">
            <div>
                <h3 className='titre'>Découvrez Nos destinations directement sur la Map</h3>
                <div className="sidebar">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div> 
                <div ref={mapContainer} style={{ height: '400px', width: '100%', marginTop: '30px' }} />
            </div>
        </Helmet>
    );
}

export default Map;
