import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>

      {/* Sección principal */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {/* Quiénes somos */}
        <section
          style={{
            backgroundColor: '#f5f5f5',
            padding: '2rem',
            borderRadius: '12px',
          }}
        >
          <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Who We Are</h3>
          <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
            After Life is a sustainable fashion brand committed to giving garments a second chance.
            We transform discarded textiles into high-quality, meaningful clothing pieces,
            combining creativity, ethics, and environmental responsibility.
          </p>
        </section>

        {/* Nuestra misión */}
        <section
          style={{
            backgroundColor: '#e1f5e1',
            padding: '2rem',
            borderRadius: '12px',
          }}
        >
          <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Our Mission</h3>
          <p style={{ lineHeight: 1.6, opacity: 0.9 }}>
            Our mission is to reduce textile waste and promote sustainable fashion choices.
            We aim to educate consumers on the impact of fast fashion and create products
            that are both beautiful and environmentally responsible.
          </p>
        </section>

        {/* Nuestros valores */}
        <section
          style={{
            backgroundColor: '#f5f5f5',
            padding: '2rem',
            borderRadius: '12px',
          }}
        >
          <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Our Values</h3>
          <ul style={{ lineHeight: 1.6 }}>
            <li>Sustainability: minimizing waste and maximizing resources.</li>
            <li>Ethics: fair and transparent production practices.</li>
            <li>Creativity: turning discarded textiles into unique fashion pieces.</li>
            <li>Community: supporting local artisans and raising awareness.</li>
          </ul>
        </section>

        {/* Llamada a la acción */}
        <section
          style={{
            backgroundColor: '#5ab98b',
            color: 'white',
            padding: '2rem',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>Join Us</h3>
          <p style={{ lineHeight: 1.6 }}>
            Be part of the change. Support sustainable fashion and give textiles a second life.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
