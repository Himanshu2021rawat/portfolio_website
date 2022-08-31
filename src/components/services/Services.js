import React from 'react'
// import { icons } from 'react-icons'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
    <h5>What I OFFER</h5>
    <h2>SERVICES</h2>

    <div className='container services__container'>
    
    <article className='service'>
    <div className="service__head">
    
    <h3>UI/UX Design</h3>
    </div>

<ul className='service__list'>



<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>

<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>


<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>
{/*
<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>

<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>

<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>
  */}
</ul>

    </article>
  {/*END OF UI?UX*/}

  <article className='service'>
  <div className="service__head">
  
  <h3>WEB DEVELOPMENT</h3>
  </div>

<ul className='service__list'>



<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>

<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>


<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>
{/*
<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>

<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>

<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>
  */}
</ul>

  </article>
  {/*END OF WEB DVELOPEMNt*/}



  <article className='service'>
  <div className="service__head">
  
  <h3>CONTENT CREATION</h3>
  </div>

<ul className='service__list'>



<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>

<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>


<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>
{/*
<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>

<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>

<li>
<BiCheck className='service__list-icon'/>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, est.</p>
</li>
  */}
</ul>

  </article>

  {/*END OF CONTENT CREATION*/}

    </div>
    </section>
  )
}

export default Services