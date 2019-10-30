import React from 'react'

const lightWidgetKey = process.env.lightWidgetKey

const Gallery = () => {
  return (
    <section id="gallery" className="section">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column has-text-centered">
              <iframe src={`//lightwidget.com/widgets/${lightWidgetKey}.html`} scrolling="no" className="lightwidget-widget has-text-centered"></iframe>
            </div>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Gallery

