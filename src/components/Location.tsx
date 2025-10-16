import React from 'react';
import LocationProps from './interfaces/LocationProps';

const Location = ({ data }: LocationProps) => {

  const sortedLandmarks = data.nearbyLandmarks.sort((a, b) => a.distance - b.distance);

  const getLandmarkColor = (type: string) => {
    switch (type) {
      case 'Cave':
        return 'red';
      case 'Ruins':
        return 'yellow';
      case 'Town':
        return 'blue';
      default:
        return 'black';
    }
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', margin: '1rem 25rem', borderRadius: '8px', alignContent: "center" }}>
      <div style={{ marginBottom: '1rem' }}>
        <p><strong>Continent:</strong> {data.continent}</p>
        <p>
          <strong>Coordenate:</strong> Latitude {data.coordinates.latitude.toFixed(6)}, 
          Longitude {data.coordinates.longitude.toFixed(6)}
        </p>
      </div>

      <div>
        <h3><strong>Near landmarks:</strong></h3>
        <ul>
          {sortedLandmarks.map((landmark, i) => (
            <li key={i} style={{ color: getLandmarkColor(landmark.type) }}>
              <strong>{landmark.name}</strong> - {landmark.type} ({landmark.distance} km)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Location;
