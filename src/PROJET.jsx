import React from 'react'

export default function () {
  return (
    <section id='projects' className="py-5 bg-light">
        <div className="container py-4">
        <h2 className="text-center fw-bold mb-5">Mes Projets</h2>
        <div className="card h-100 shadow-sm border-0 p-3">
          <div className="card-body">
        <h3 className="card-title text-primary h4 mb-3">HotelBook</h3>
            <p className="card-text text-secondary">Application web de gestion et de réservation d'hôtel développée avec PHP, MySQL et Bootstrap.</p>
          </div>
          <div className="project-card">
            <h3 className="card-title text-primary h4 mb-3">Guidmi</h3>
            <p className="card-text text-secondary">Plateforme web touristique conçue pour guider les visiteurs vers les services locaux et monuments au Maroc.</p>
          </div>
        </div>
        </div>
    </section>
    
  )
}
