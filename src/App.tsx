import { useState } from 'react'
import Location from './components/Location'
import Blogs from './components/Blogs'
import AboutUs from './components/AboutUs'

function App() {
  const [screen, setScreen] = useState<any>('')

  const handleScreenChange = (newScreen: string) => {
    setScreen(newScreen);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // sube al inicio
  };


  return (

    <>
      <div
        style={{
          minHeight: '100vh',
          background: 'white',
          fontFamily: "'Montserrat', sans-serif",
          paddingTop: '80px', // ajusta según la altura del header
        }}
      >
        <header
          style={{
            backgroundColor: '#5ab98b',
            color: 'white',
            position: 'fixed', // fijo
            top: 0,
            left: 0,
            width: '100%',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            borderBottom: '1px solid black',
            zIndex: 9999, // encima de todo
          }}
        >

          <h1
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              margin: 0,
              fontSize: '2.5rem',
              letterSpacing: '0.3rem',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            AFTER
            <img
              src="/logoNT.png"
              alt="Logo"
              style={{
                height: '40px',
                verticalAlign: 'middle',
              }}
            />
            LIFE
          </h1>

          <div>
            <button style={btnStyle} onClick={() => handleScreenChange('')}>Home</button>
            <button style={btnStyle} onClick={() => handleScreenChange('location')}>Location</button>
            <button style={btnStyle} onClick={() => handleScreenChange('aboutUs')}>About Us</button>
            <button style={btnStyle} onClick={() => handleScreenChange('blogs')}>Blogs</button>

          </div>
        </header>

        <div>
          {screen === '' && (
            <>
              <div
                style={{
                  minHeight: 'calc(100vh - 80px)', // viewport menos header
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >

                <div
                  style={{
                    flex: '1 1 55%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '2rem',
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="After Life"
                    style={{
                      maxWidth: '300px',
                      width: '80%',
                      marginBottom: '1.5rem'
                    }}
                  />

                  <h2
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 500,
                      letterSpacing: '0.15rem'
                    }}
                  >
                    Second life. Real worth.
                  </h2>
                </div>

                <div
                  style={{
                    flex: '1 1 35%', // ocupa el resto
                    padding: '3rem 2rem',
                    backgroundColor: '#f5f5f5',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >

                  <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>
                    Sustainable fashion with purpose
                  </h3>

                  <p
                    style={{
                      maxWidth: '700px',
                      margin: '0 auto',
                      opacity: 0.8,
                      lineHeight: 1.6
                    }}
                  >
                    After Life gives garments a second chance, transforming discarded textiles
                    into meaningful, sustainable fashion pieces with real value.
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: '#5ab98b',
                  color: 'white',
                  padding: '4rem 2rem',
                  textAlign: 'center',
                  lineHeight: 1.6,
                  borderRadius: '12px',
                }}
              >
                <h3 style={{ fontSize: '1.6rem', marginBottom: '2rem' }}>
                  From Discarded Clothes to New Life
                </h3>

                <ol style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'left', paddingLeft: '1rem' }}>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Collection:</strong> Clothes are collected from donations, retail returns, and discarded textiles.
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Sorting:</strong> Items suitable for second-hand sale are separated from those that will be recycled.
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Material Classification:</strong> Non-reusable clothing is sorted by material type—cotton, wool, polyester, and blends.
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Processing Natural Fibers:</strong> Cotton, wool, and other natural fibers are shredded, cleaned, and spun into new yarns.
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Processing Synthetic Fibers:</strong> Polyester and other synthetics are melted and reformed into threads or pellets for new products.
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <strong>Manufacturing:</strong> The new yarns and materials are used to create sustainable fashion items, home textiles, and insulation products.
                  </li>
                  <li>
                    <strong>Distribution:</strong> Final products are sold or donated, closing the loop and giving the garments a second life.
                  </li>
                </ol>
              </div>


              <div
                style={{
                  backgroundColor: 'white',
                  minHeight: '50vh',
                  maxHeight: '70vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '2rem',
                  overflowY: 'auto', // 🔑 CLAVE
                }}
              >
                <div
                  style={{
                    width: '100%',
                    maxWidth: '800px',
                    overflowX: 'auto',
                  }}
                >
                  <table
                    style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    }}
                  >
                    <thead>
                      <tr style={{ backgroundColor: '#5ab98b', color: 'white' }}>
                        <th style={{ padding: '0.9rem', fontSize: '1rem' }}>Material</th>
                        <th style={{ padding: '0.9rem', fontSize: '1rem' }}>Price (€ / kg)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Cotton", price: 2.5 },
                        { name: "Wool", price: 3.2 },
                        { name: "Polyester", price: 1.8 },
                        { name: "Silk", price: 4.0 },
                        { name: "Linen", price: 3.5 },
                        { name: "Blends", price: 2.0 },
                      ].map((material) => (
                        <tr key={material.name} style={{ borderBottom: '1px solid #ddd' }}>
                          <td style={{ padding: '0.8rem', textAlign: 'center' }}>{material.name}</td>
                          <td style={{ padding: '0.8rem', textAlign: 'center' }}>
                            €{material.price.toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>


            </>
          )}

          {screen === 'location' && (
            <>
              <h2 style={{ textAlign: 'center', fontSize: '2rem', marginTop: '2rem' }}>
                Location
              </h2>
              <Location />
            </>
          )}
          {screen === 'aboutUs' && (
            <>
              <h2 style={{ textAlign: 'center', fontSize: '2rem', marginTop: '2rem' }}>
                About Us
              </h2>
              <AboutUs />
            </>
          )}
          {screen === 'blogs' && (
            <>
              <h2 style={{ textAlign: 'center', fontSize: '2rem', marginTop: '2rem' }}>
                Blogs
              </h2>
              <Blogs />
            </>
          )}
        </div>
      </div>
      <footer
        style={{
          backgroundColor: '#111',
          color: '#eee',
          padding: '3rem 2rem 1.5rem',
          fontFamily: "'Montserrat', sans-serif"
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="/logoNT.png" alt="After Life" style={{ height: '40px' }} />
              <h3 style={{ margin: 0, letterSpacing: '0.2rem' }}>AFTER LIFE</h3>
            </div>
            <p style={{ marginTop: '1rem', opacity: 0.7 }}>
              Second life. Real worth.
            </p>
          </div>

          <div>
            <h4>Navigation</h4>
            <ul style={footerList}>
              <li><button style={footerLink} onClick={() => handleScreenChange('')}>Home</button></li>
              <li><button style={footerLink} onClick={() => handleScreenChange('location')}>Location</button></li>
              <li><button style={footerLink} onClick={() => handleScreenChange('aboutUs')}>About Us</button></li>
              <li><button style={footerLink} onClick={() => handleScreenChange('blogs')}>Blogs</button></li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul style={footerList}>
              <li><a href="#" style={footerAnchor}>Privacy Policy</a></li>
              <li><a href="#" style={footerAnchor}>Terms & Conditions</a></li>
              <li><a href="#" style={footerAnchor}>Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <hr style={{ margin: '2rem 0', opacity: 0.2 }} />

        <p
          style={{
            textAlign: 'center',
            fontSize: '0.9rem',
            opacity: 0.6
          }}
        >
          © {new Date().getFullYear()} After Life — Web producida para el Super Reto
        </p>
      </footer>

    </>
  )
}

const btnStyle = {
  padding: '0.7rem 1.2rem',
  margin: '0 0.5rem',
  borderRadius: '8px',
  border: '1px solid black',
  color: 'black',
  backgroundColor: 'white',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
}

const footerLink: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: '#eee',
  padding: 0,
  cursor: 'pointer',
  opacity: 0.8,
  marginBottom: '0.5rem',
  textAlign: 'left'
}

const footerList: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: '1rem 0 0'
}

const footerAnchor: React.CSSProperties = {
  color: '#eee',
  textDecoration: 'none',
  opacity: 0.8
}




export default App
