import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-white text-center">
      <div className="container py-4" style={{ maxWidth: '600px' }}>
        <h2 className="fw-bold mb-3">Contact</h2>
        <p className="text-secondary mb-4">N'hésitez pas à me contacter pour toute question ou opportunité de collaboration.</p>
        
        <div className="card border-0 shadow-sm p-4 bg-light">
          <p className="mb-2 fs-5">📧 Email : nouhailabenyaya@email.com</p>
          <p className="mb-0 fs-5">📍 Lieu : Maroc</p>
        </div>
      </div>
    </section>
  );
}