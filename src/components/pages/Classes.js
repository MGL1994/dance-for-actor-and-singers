import React from 'react'
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl'

const mapBoxKey = process.env.mapBoxKey

const Map = ReactMapboxGl({
  accessToken: mapBoxKey
})
const zoom = [12, 16]

const Classes = () => {
  return (
    <section id="classes" className="hero is-large">
      <div className="hero-body">
        <div className="container">
          <Map
            style="mapbox://styles/mapbox/streets-v9"
            zoom={zoom}
            containerStyle={{
              height: '600px',
              width: '100%'
            }}>
          </Map>
        </div>
      </div>
    </section>
  )
}

export default Classes