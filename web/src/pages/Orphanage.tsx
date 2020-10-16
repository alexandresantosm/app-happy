import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const happyMapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],

  popupAnchor: [0, -60]
});

export default function Orphanage() {
  const { goBack } = useHistory();
  return (
    <div id="page-orphanage">
      <aside>
        <img src={mapMarkerImg} alt="Logo Happy"/>

        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>

      <main>
        <div className="orphanage-details">
          <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Meninas"/>

          <div className="images">
            <button className="active" type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Meninas"/>
            </button>
            <button className="active" type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Meninas"/>
            </button>
            <button className="active" type="button">
              <img src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg" alt="Lar das Meninas"/>
            </button>
          </div>

          <div className="orphanage-details-content">
            <h1>Lar das Meneinas</h1>
            <p>Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.</p>

            <div className="map-container">
              <Map
                center={[-3.7422821,-38.4932469]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >

                <TileLayer 
                  url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[-3.7422821,-38.4932469]}
                />
              </Map>
              <footer>
                <a href="#">Ver rotas no Google Maps</a>
              </footer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}