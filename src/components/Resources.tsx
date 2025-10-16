import React from 'react'
import ResourcesProps from './interfaces/ResourcesProps'

const Resources = ({ data }: ResourcesProps) => {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', margin: '1rem 25rem', borderRadius: '8px', alignContent: "center" }}>
      <div style={{ marginBottom: '1rem' }}></div>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}><strong>Storage</strong></h2>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
        <h3><strong>Food:</strong></h3>
        <p><strong>Type: </strong>{data.storage.food.type}</p>
        <p><strong>Quantity: </strong>{data.storage.food.quantity} {data.storage.food.unit}</p>
      </div>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
        <h3><strong>Water:</strong></h3>
        <p><strong>Source: </strong>{data.storage.water.source}</p>
        <p><strong>Capacity: </strong>{data.storage.water.capacity} {data.storage.water.unit}</p>
      </div>
      <div style={{ marginBottom: '1rem' }}></div>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}><strong>Armory</strong></h2>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', marginBottom: '1rem' }}>
        <p><strong>Weapons: </strong></p>
        {data.armory.weapons.map((w) => (
          <p><strong>{w.type}:</strong> {w.quantity}</p>
        ))}
      </div>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
        <p><strong>Shields: </strong></p>
        {data.armory.shields.map((s) => (
          <p><strong>{s.type}:</strong> {s.quantity}</p>
        ))}
      </div>
    </div>

  )
}

export default Resources
