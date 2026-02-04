import React from 'react'
import { Route, Routes } from 'react-router'
import RMyProfile from '../Representative/Pages/RMyProfile/RMyProfile'

const RepRouter = () => {
  return (
    <div>
        <Routes>
          <Route path='repmyprofile' element={<RMyProfile/>}/>
        </Routes>
    </div>
  )
}

export default RepRouter