import React from 'react'
import './Fotter.css'
import {FiFacebook} from 'react-icons/fi'
import {IoLogoInstagram} from 'react-icons/io'
import {TbBrandTelegram} from 'react-icons/tb'
import {FiGithub} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'

const Fotter = () => {
  return (
    <footer>
    
    <a href="#" className='footer__logo'>Himanshu</a>
    
    <ul className='permalinks'>
    <li> <a href="#">Home</a></li>
    <li> <a href="#">About</a></li>
    <li> <a href="#">Services</a></li>
    <li> <a href="#">Portfolio</a></li>
    <li> <a href="#">Testimonials</a></li>
    <li> <a href="#">Contact</a></li>
    
  </ul>

<div className="footer__socials">

<a href="https://www.facebook.com/profile.php?id=100031796619168"><FiFacebook/></a>
<a href="https://www.instagram.com/himanshu_._rawat/"><IoLogoInstagram/></a>
<a href="https://web.telegram.org/z/"><TbBrandTelegram/></a>
<a href="https://github.com/Himanshu2021rawat"><FiGithub/></a>
<a href="https://www.linkedin.com/in/himanshu-rawat-046a35222/" target='_blank'><BsLinkedin/></a>

</div>

<div className="footer__copyright">
<small>© Copyright Himanshu Rawat . All Rights Reserved. Manage By Himanshu Rawat</small>
</div>

  </footer>
  )
}

export default Fotter