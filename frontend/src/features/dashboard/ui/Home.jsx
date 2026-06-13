import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../../shared/state/themeSlice';


const Home = () => {
  const dispatch = useDispatch();

 const handleThemeChange =() =>{
  console.log("clicked");
  
 }
  return (
    <div>
      <h1>this is my dashboard hone page</h1>
      <button onClick={()=>dispatch(toggleTheme())} >Change theme</button>
    </div>
  )
}

export default Home
