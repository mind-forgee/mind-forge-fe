import React from 'react'

const InformationProfile = ({ name, email, plan, level, onLogout}) => {
  return (
    <div className='bg-white px-9 py-6 rounded-lg shadow-md'>
        <h3 className='text-lg font-bold text-primary mb-4'>Information</h3>
        <table className='table-auto w-full'>
          <tbody>
            <tr>
              <td className='text-sm text-primary font-semibold'>Name</td>
              <td className='text-sm text-gray-600'>{name}</td>
            </tr>
            <tr>
              <td className='text-sm text-primary font-semibold'>Email</td>
              <td className='text-sm text-gray-600'>{email}</td>
            </tr>
            <tr>
              <td className='text-sm text-primary font-semibold'>Plan</td>
              <td className='text-sm text-gray-600'>{plan || "No Course Yet"}</td>
            </tr>
            <tr>
              <td className='text-sm text-primary font-semibold'>Level</td>
              <td className='text-sm text-gray-600'>{level}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6">
            <button onClick={onLogout} className='px-12 py-3 bg-[#FF4E37] text-light font-semibold rounded-lg'>
                Logout
            </button>
        </div>
    </div>
  )
}

export default InformationProfile
