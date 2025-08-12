import React from 'react'

const SecondaryButton = ({ children, onclick }) => {
  return (
    <button onClick={onclick} className="bg-primary text-light font-normal py-3 px-12 border border-gray-300 rounded-md shadow-sm hover:bg-secondary transition-colors">
      {children}
    </button>
  )
}

export default SecondaryButton