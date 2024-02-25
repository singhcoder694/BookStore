import React,{useState, useEffect} from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import { FaArrowUpLong } from "react-icons/fa6";
function App() {
  function scrollToTop() {
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Function to handle scroll event
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Home />
      {scrollY >= 750 ?<a onClick={scrollToTop} className='upArrow'><FaArrowUpLong /></a>:null}
    </>
  )
}

export default App
