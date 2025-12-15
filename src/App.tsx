import { useState } from 'react'
import Location from './components/Location'

function App() {
  const [screen, setScreen] = useState<any>('')

  return (

    <div
      style={{
        minHeight: '100vh',
        background: '#dec29a',
      }}
    >
      <header
        style={{
          backgroundColor: '#3F4321',
          color: '#D9C7A1',
          position: 'relative',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          borderBottom: '2px solid #9AA35A',
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
            color: '#D9C7A1',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem', 
          }}
        >
          AFTER
          <img
            src="/logo.png" 
            alt="Logo"
            style={{
              height: '40px', 
              verticalAlign: 'middle',
            }}
          />
          LIFE
        </h1>

        <div>
          <button style={btnStyle} onClick={() => setScreen('')}>Home</button>
          <button style={btnStyle} onClick={() => setScreen('location')}>Location</button>
          <button style={btnStyle} onClick={() => setScreen('aboutUs')}>About Us</button>
        </div>
      </header>




      <div>
        {screen === '' && (
          <>
            <h2 style={{ textAlign: 'center', fontSize: '2rem', marginTop: '2rem' }}>
              Welcome to After Life
            </h2>
            <img
              src='/logo.png'
              alt="After Life"
              style={{ display: 'block', margin: '2rem auto', maxWidth: '80%', borderRadius: '8px' }}
            />
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
      </div>

    </div>
  )
}

const btnStyle = {
  padding: '0.7rem 1.2rem',
  margin: '0 0.5rem',
  borderRadius: '8px',
  border: '1px solid #3F4321',
  color: '#3F4321',
  backgroundColor: '#dec29a',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
}


export default App
