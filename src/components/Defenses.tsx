import React from 'react'
import DefensesProps from './interfaces/DefensesProps'

const Defenses = ({ data }: DefensesProps) => {

  const ammoCountColor = (count: number) => {
    if(count <= 25) {
      return 'red'
    } else if(count <= 50) {
      return 'orange'
    } else {
      return 'green'
    }
  }

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', margin: '1rem 25rem', borderRadius: '8px', alignContent: "center" }}>
      <div style={{ marginBottom: '1rem' }}>
        <p style={{ fontSize: '1.5rem'}}><strong>Walls:</strong></p>
        <p><strong>Height: </strong> {data.walls.height}m</p>
        <p><strong>Material: </strong> {data.walls.material}</p>
        {data.walls.enchantments.map((e) => (
          <div>
            <p><strong>Enchantment:</strong> {e.name} - Level {e.level}/10</p>
            <div style={{ height: '10px', width: '100px', backgroundColor: '#b4b4b4ff', borderRadius: '1rem' }}>
              <div style={{ height: '10px', width: `${(e.level / 10) * 100}px`, backgroundColor: '#92b300ff', borderRadius: '1rem' }}> </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginBottom: '1rem'}} >
        <p style={{ fontSize: '1.5rem'}}><strong>Towers: </strong></p>
        {data.towers.map((t) => (
          <div style={{ border: '1px solid #ccc', borderRadius: '8px',  marginBottom:'1rem', padding: '1rem'}}>
            <p style={{marginBottom: '1rem'}}><strong>{t.name}</strong></p>
            <p>Armament:</p>
            <p>Type: {t.armament.weaponType}</p>
            <p>Ammo type: {t.armament.ammunitionType} - {(t.armament.ammunitionCount / 1000) * 100}%</p>
            <div style={{ height: '12px', width: '100px', backgroundColor: '#b4b4b4ff', borderRadius: '1rem', marginBottom: '1rem' }}>
              <div style={{ height: '12px', width: `${(t.armament.ammunitionCount / 1000) * 100}px`, backgroundColor: `${ammoCountColor((t.armament.ammunitionCount/1000)*100)}`, borderRadius: '1rem' }}> </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Defenses