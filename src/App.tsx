import React, { useEffect, useState } from 'react'
import Location from './components/Location';
import Defenses from './components/Defenses';
import Resources from './components/Resources';
import History from './components/History';
import Inhabitants from './components/Inhabitants';


function App() {
  const [data, setData] = useState<any>(null)
  const [screen, setScreen] = useState<any>('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../citadel.json');
      if (!response.ok) {
        throw new Error('Error al cargar citadel.json');
      }
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  const defense = () => {
    setScreen('defense')
  }

  const history = () => {
    setScreen('history')
  }

  const resources = () => {
    setScreen('resources')
  }

  const inhabitants = () => {
    setScreen('inhabitants')
  }

  const location = () => {
    setScreen('location')
  }



  return (

    <div className="h-screen overflow-x-hidden">
      <div>
        <button style={{ padding: '1rem', border: '1px solid #ccc', margin: '1rem ', borderRadius: '8px', alignContent: "center" }} onClick={location}>Location</button>
        <button style={{ padding: '1rem', border: '1px solid #ccc', margin: '1rem ', borderRadius: '8px', alignContent: "center" }} onClick={defense}>Defenses</button>
        <button style={{ padding: '1rem', border: '1px solid #ccc', margin: '1rem ', borderRadius: '8px', alignContent: "center" }} onClick={inhabitants}> Inhabitants</button>
        <button style={{ padding: '1rem', border: '1px solid #ccc', margin: '1rem ', borderRadius: '8px', alignContent: "center" }} onClick={resources}>Resources</button>
        <button style={{ padding: '1rem', border: '1px solid #ccc', margin: '1rem ', borderRadius: '8px', alignContent: "center" }} onClick={history}>History</button>
      </div>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', marginTop: '1rem' }}>{data ? (data.name) : null}</h1>
      <div>
        {screen === 'location' ? (
          <>
            <h2 style={{ textAlign: 'center', fontSize: '2rem', marginTop: '2rem' }}>Location</h2>
            <Location data={data.location} />
          </>

        ) : null}
        {screen === 'defense' ? (
          <>
            <h2 style={{ textAlign: 'center', fontSize: '2rem', marginTop: '2rem' }}>Defenses</h2>
            <Defenses data={data.defenses} />

          </>
        ) : null}
        {screen === 'resources' ? (
          <>
            <h2 style={{ textAlign: 'center', fontSize: '2rem', marginTop: '2rem' }}>Resources</h2>
            <Resources data={data.resources} />
          </>
        ) : null}
        {screen === 'history' ? (

          <>
            <h2 style={{ textAlign: 'center', fontSize: '2rem', marginTop: '2rem' }}>History</h2>
            <History data={data.history} />
          </>
        ) : null}
        {screen === 'inhabitants' ? (

          <>
            <h2 style={{ textAlign: 'center', fontSize: '2rem', marginTop: '2rem' }}>History</h2>
            <Inhabitants data={data.inhabitants} />
          </>
        ) : null}

      </div>
    </div>
  )
}

export default App
