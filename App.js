import React, { useState } from 'react'

import './index.css';

let time=new Date().toLocaleTimeString();

const App=() =>{
const [ctime,setTime]=useState(time);
const increment=()=>{
  time=new Date().toLocaleTimeString();
  setTime(time)
}
setInterval(increment,1000)
  return (<>
   <div className="time">{ctime}</div>
   
  </>
  )
}

export default App
