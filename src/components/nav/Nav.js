import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {AiOutlineFieldBinary} from 'react-icons/ai'
import { useState } from 'react'


const Nav = () => {

const [ActiveNav, setActiveNav] = useState("#");
 
  return (
    <nav >
    
    <a href="#" title='Home' onClick={()=> setActiveNav('#')} className ={ActiveNav === "#" ? 'active' : ''} ><AiOutlineHome/></a>
    <a href="#about" title='About' onClick={()=> setActiveNav('#about')} className ={ActiveNav === "#about" ? 'active' : ''}  ><AiOutlineUser/></a>
    <a href=" #experience"title='Experience'onClick={()=> setActiveNav('#experience')} className ={ActiveNav === "#experience" ? 'active' : ''} ><BiBook/></a>
    <a href=" #services"title='Services' onClick={()=> setActiveNav('#services')} className ={ActiveNav === "#services" ? 'active' : ''}  ><RiServiceLine/></a>
    <a href=" #contact"title='Contact' onClick={()=> setActiveNav('#contact')} className ={ActiveNav === "#contact" ? 'active' : ''} ><BiMessageRoundedDots/></a>
    <a href=" #developer"title='For-Developers' onClick={()=> setActiveNav('#developer')} className ={ActiveNav === "#developer" ? 'active' : ''} ><AiOutlineFieldBinary/></a>
    
    </nav>
  )
}

export default Nav