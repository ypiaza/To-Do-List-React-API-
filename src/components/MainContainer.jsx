import React from 'react'
import LoginRegister from './LoginRegister'

const MainContainer = () => {
  return (
    <div className='flex h-[70%] w-[50%] rounded-2xl shadow-2xl shadow-white/30 bg-slate-300 backdrop-blur'>
        <LoginRegister />
    </div>
  )
}

export default MainContainer