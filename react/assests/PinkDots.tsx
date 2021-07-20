import React from 'react'

const PinkDots = () => {
  return (
    <div className="flex items-center rotating">
      <span
        id="pinkDot1"
        className="br-100 dib bg-rebel-pink"
        style={{
          height: '0.5rem',
          width: '0.5rem',
          minWidth: '0.5rem',
        }}
      />
      <span
        id="pinkDot2"
        className="br-100 dib bg-rebel-pink ml3"
        style={{
          height: '0.5rem',
          width: '0.5rem',
          minWidth: '0.5rem',
        }}
      />
    </div>
  )
}

export default PinkDots
