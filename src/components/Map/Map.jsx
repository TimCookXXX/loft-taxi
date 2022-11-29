import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import './map.scss'

function Map() {

  const mapContainer = useRef(null)

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoidGltbGVhZG9mZmljaWFsIiwiYSI6ImNsYXh3Yng2ajA1bWMzc281bWE0bHdwd2IifQ.RIkWGprVV37jsc0WU-Hy7w'
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [30.3056504, 59.9429126],
      zoom: 10
    })

    return () => {
      map.remove()
    }
  }, [])

  return (  
    <div className='map'>
      <div className='map__app' ref={mapContainer}></div>
    </div>
  )
}

export default Map