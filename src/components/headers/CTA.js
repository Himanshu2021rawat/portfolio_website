import React from 'react'
import MyCV from '../../Assets/MyCV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
   <a href = {MyCV} download className = 'btn'>Download CV</a>
   <a href='#contact' className='btn btn-primary'>Let's Talk</a> 
    </div>
  )
}

export default CTA