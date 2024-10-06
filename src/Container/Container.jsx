import React from 'react'

function Container({children}) {
  return (
    <div className='px-5 py-10'>
        {children}
    </div>
  )
}

export default Container