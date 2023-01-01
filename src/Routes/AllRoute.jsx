import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Problem1 from '../components/Problem1'
import Problem2 from '../components/Problem2'

const AllRoute = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/problem1' element={<Problem1/>}/>
        <Route path='/problem2' element={<Problem2/>}/>
        
      </Routes>
    </div>
  )
}

export default AllRoute