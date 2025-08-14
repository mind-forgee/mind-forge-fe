import React from 'react'
import { User } from 'lucide-react'

const HeadProfile = ({ name, email, avatar }) => {
  return (
    <div className="bg-white px-4 py-6 flex flex-col items-center rounded-lg shadow-md">
      {avatar ? (
        <img
          src={avatar}
          alt={name}
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
      ) : (
        <div className="w-48 h-48 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 mb-4">
          <User size={40} />
        </div>
      )}
      <h2 className="text-lg font-semibold text-primary">@{name}</h2>
      <p className="text-sm text-gray-600">{email}</p>
    </div>
  )
}

export default HeadProfile
