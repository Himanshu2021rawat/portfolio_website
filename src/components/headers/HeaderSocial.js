import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {AiFillDribbbleCircle} from 'react-icons/ai'
import {IoLogoInstagram} from 'react-icons/io'
const HeaderSocial = () => {
  return (
    <div className ='header__socials'>
    <a href="https://www.linkedin.com/in/himanshu-rawat-046a35222/" target='_blank'><BsLinkedin/></a>
    <a href="https://github.com/Himanshu2021rawat" target='_blank'><FiGithub/></a>
    <a href="https://dribble.com" target='_blank'><AiFillDribbbleCircle/></a>
    <a href="https://www.instagram.com/himanshu_._rawat/"><IoLogoInstagram/></a>
    
    </div>
  )
}

export default HeaderSocial