import React from 'react'
import {Link} from 'react-router-dom'
import {Map, TileLayer} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import '../styles/pages/orphanageMap.css'

import mapMarkerImg from '../images/map-marker.svg'
import {FiPlus} from 'react-icons/fi'

function OrphanageMap (){
    return (
        <div id="page-map">

            <aside>
                <header>
                    <img src={mapMarkerImg} alt="map-marker"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>  

                <footer className="location">
                    <strong>Pompéu</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>

            <Map 
                center={[-19.2284063,-44.9934695]}
                zoom={15}
                style={{
                    height: '100%',
                    width: '100%'
                }}
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
                <TileLayer
                    url = {`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>

            <Link to="/" className="add-orphanage">
                <FiPlus size={26} color="#fff" />
            </Link>

        </div>
    )
}

export default OrphanageMap 