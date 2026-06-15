import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../../shared/state/themeSlice';


const Home = () => {
  const dispatch = useDispatch();

 const handleThemeChange =() =>{
  dispatch(toggleTheme())
  
 }
  return (
    <div>
      <h1>this is my dashboard hone page</h1>
      <button onClick={handleThemeChange} >Change theme</button>
    </div>
  )
}

export default Home
