import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../Assets/avatar1.jpg";
import AVTR2 from "../../Assets/avatar2.jpg";
import AVTR3 from "../../Assets/avatar3.jpg";
import AVTR4 from "../../Assets/avatar4.jpg";


// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [

{

  avatar:AVTR1,
  name:"Abhay Nagarkoti",
  review:'It was a  great experience working with him as my work which i have assigned to him was completed in time and was looking great the explicit wrork he does his professionals iam looking forward to work with him more .Thanku'

},

{
  avatar:AVTR2,
  name:"Aditya Narula",
  review:'It was a  great experience working with him as my work which i have assigned to him was completed in time and was looking great the explicit wrork he does his professionals iam looking forward to work with him more .Thanku'

},


{
  avatar:AVTR3,
  name:"Perminder Singh",
  review:'It was a  great experience working with him as my work which i have assigned to him was completed in time and was looking great the explicit wrork he does his professionals iam looking forward to work with him more .Thanku'

},


{
  avatar:AVTR4,
  name:"Dhana Hizam",
  review:'It was a  great experience working with him as my work which i have assigned to him was completed in time and was looking great the explicit wrork he does his professionals iam looking forward to work with him more .Thanku'

}





]


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      
            // install Swiper modules
            modules={[Pagination ]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
    
      >
    {
      data.map(({avatar,name,review},index)=>{
      return(  
       <SwiperSlide key={index} className="testimonial">
        <div className="client__avatar">
          <img src={avatar} alt="Avatar" />
        </div>
        <h5 className="Names">{name}</h5>
        <small className="client__review">
          {review}
        </small>
        </SwiperSlide>
      )
      })
    }
    </Swiper>
    </section>
  )
}

export default Testimonials;
