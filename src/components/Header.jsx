import React from 'react'

const Header = ({title}) => {
  return (
    <div className='bg-white h-12 px-4 flex items-center'>
        {title}
    </div>
  )
}

export default Header