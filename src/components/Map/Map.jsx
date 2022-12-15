import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import './map.scss'
import MapOrderForm from './MapOrderForm'
import { connect } from 'react-redux'
import ModalInfo from './ModalInfo'

export const drawRoute = (map, coordinates) => {
  map.flyTo({
    center: coordinates[0],
    zoom: 15
  })

  map.addLayer({
    id: "route",
    type: "line",
    source: {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates
        }
      }
    },
    layout: {
      "line-join": "round",
      "line-cap": "round"
    },
    paint: {
      "line-color": "#ffc617",
      "line-width": 8
    }
  })
}

function Map({ route, card }) {

  const closeModal = () => {
    if (route.length !== 0) {
      console.log(route.length = 0)
    }
  }

  const mapContainer = useRef(null)

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGltbGVhZG9mZmljaWFsIiwiYSI6ImNsYXh3Yng2ajA1bWMzc281bWE0bHdwd2IifQ.RIkWGprVV37jsc0WU-Hy7w'
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3056504, 59.9429126],
      zoom: 10
    })

    map?.on('load', async () => {
      if (route.length > 0) {
        await drawRoute(map, route)
      }
    })

    return () => {
      map.remove()
    }
  }, [route])

  return (  
    <div className='map'>
      <div className='map__app' ref={mapContainer}>
      {route.length === 0 ? <MapOrderForm /> : <ModalInfo modal={closeModal} />}
      </div>
    </div>
  )
}

export default connect(
  (state) => ({ route: state.addressesReducer.route, card: state.CardData }),
  undefined
) (Map)