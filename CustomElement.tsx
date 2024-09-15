import React, { useState } from 'react'

const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '20px',
  backgroundColor: '#f0f0f0',
  borderRadius: '8px',
}

const titleStyle = {
  color: '#4a4a4a',
}

const buttonStyle = {
  backgroundColor: '#3899ec',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '4px',
  cursor: 'pointer',
}

export function CustomElement() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>This is a Custom Element</h2>
      <p>You've clicked the button {count} times.</p>
      <button 
        style={buttonStyle} 
        onClick={handleClick}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4eb7f5'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3899ec'}
      >
        Click me
      </button>
    </div>
  )
}
