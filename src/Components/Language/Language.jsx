import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './language.css'
import { useTranslation } from 'react-i18next';


const languages=[
  {code:"en",lang:"English"},
  {code:"hi",lang:"Hindi"},
  {code:"fr",lang:"French"},
  {code:"pr",lang:"Portuguese"},
];



const Language = () => {
      const {i18n} =useTranslation();

  const changeLanguage=(lng)=>{
      i18n.changeLanguage(lng)
  }
  
  useEffect(()=>{
    console.log(i18n.dir());
    
    document.body.dir=i18n.dir();
},[i18n,i18n.language]);



  return (
    
    <div className='container'>
      <div className='Heading'>
      <h1>Select Languages</h1>
      </div>
      {
        languages.map((lng)=>{
          return <button className='allButtons' key={lng.code} onClick={()=>changeLanguage(lng.code)}>{lng.lang}</button>
        })
      }
      <div className='Link'>
      <Link to='/' className='Link' style={{fontSize:"20px" , textDecoration:"none"}}  >Home</Link>
      </div>
    </div>
   
  )
}

export default Language