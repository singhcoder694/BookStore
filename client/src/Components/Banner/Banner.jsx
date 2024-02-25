import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
export default function Banner() {
  useEffect(() => {
    AOS.init({
        duration: 2000
    });
}, []);
  return (
    <div data-aos="fade-left">
      <img src={"/book_store_main.png"} alt="Books Image"/>
    </div>
  )
}
