import React, { useState } from 'react'
import InhabitantsProps from './interfaces/InhabitantsProps'

const Inhabitants = ({ data }: InhabitantsProps) => {
  const [role, setRole] = useState<any>('')

  const soldier = () => {
    setRole('soldier')
  }

  const mage = () => {
    setRole('mage')
  }

  const villager = () => {
    setRole('villager')
  }



  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', margin: '1rem 25rem', borderRadius: '8px', alignContent: "center" }}>
      <div style={{ marginBottom: '1rem' }}>
        <button style={{ cursor: 'pointer' }} onClick={soldier}><strong>Soldier</strong></button>
        {role === 'soldier' ? (
          <>
            <p><strong>Count: </strong>{data.roles[0].count}</p>
          </>

        ) : null}
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={mage}><strong>Mage</strong> { }</button>
        {role === 'mage' ? (
          <>
            <p><strong>Count: </strong>{data.roles[1].count}</p>
            <p></p>
          </>

        ) : null}
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={villager}><strong>Villager</strong> { }</button>
        {role === 'villager' ? (
          <>
            <p><strong>Count: </strong>{data.roles[2].professions?.map((p) => {
              return (
                <>
                 {p.type}: {p.count} 
                </>
              )
            })}</p>
            <p></p>
          </>

        ) : null}
      </div>
    </div>
  )
}


export default Inhabitants