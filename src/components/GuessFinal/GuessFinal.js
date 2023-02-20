import React from 'react'

function GuessFinal ({ status, children }) {
  return <div className={`${status} banner`}>{children}</div>
}

export default GuessFinal
