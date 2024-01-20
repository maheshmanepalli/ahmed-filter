import React from 'react'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import Filter from './Filter'
import Display from './Display'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Filter/>}></Route>
        <Route path='/display' element={<Display/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App