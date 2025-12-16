import React from 'react';

const Location = () => {
  return (
    <div
      style={{
        padding: '1rem',
        margin: '2rem auto',
        maxWidth: '95%',
        borderRadius: '12px',
        border: '1px solid #5ab98b',
        backgroundColor: '#5ab98b',
      }}
    >
      <div
        style={{
          position: 'relative',
          paddingBottom: '40%',
          height: 0,
          overflow: 'hidden',
          borderRadius: '8px',
        }}
      >
        <iframe
          src="https://www.google.com/maps?q=San+Sebastián,+España&output=embed"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Location;
