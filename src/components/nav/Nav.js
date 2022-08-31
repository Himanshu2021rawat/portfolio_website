import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRoundedDots} from 'react-icons/bi'
import { useState } from 'react'


const Nav = () => {

const [ActiveNav, setActiveNav] = useState("#");
 
  return (
    <nav>
    
    <a href="#" onClick={()=> setActiveNav('#')} className ={ActiveNav === "#" ? 'active' : ''} ><AiOutlineHome/></a>
    <a href="#about" onClick={()=> setActiveNav('#about')} className ={ActiveNav === "#about" ? 'active' : ''}  ><AiOutlineUser/></a>
    <a href=" #experience" onClick={()=> setActiveNav('#experience')} className ={ActiveNav === "#experience" ? 'active' : ''} ><BiBook/></a>
    <a href=" #services"   onClick={()=> setActiveNav('#services')} className ={ActiveNav === "#services" ? 'active' : ''}  ><RiServiceLine/></a>
    <a href=" #contact"  onClick={()=> setActiveNav('#contact')} className ={ActiveNav === "#contact" ? 'active' : ''} ><BiMessageRoundedDots/></a>
    
    </nav>
  )
}

export default Nav