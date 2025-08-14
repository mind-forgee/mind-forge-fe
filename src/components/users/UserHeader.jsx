import React from 'react'

const UserHeader = ({ subTitle, title}) => {
  return (
    <div className="mb-8 text-center">
      <p>{subTitle}</p>
      <h1 className="text-3xl font-semibold">{title}</h1>
    </div>
  )
}

export default UserHeader