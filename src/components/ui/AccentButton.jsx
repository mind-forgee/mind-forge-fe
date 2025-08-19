import React from 'react'

const AccentButton = ({ children, onClick }) => {
  return (
    <button
      className="bg-accent text-primary py-4 px-7 rounded-md hover:bg-accent-dark transition-colors font-semibold"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default AccentButton