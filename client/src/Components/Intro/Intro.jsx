import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'
import { GiArchiveResearch } from "react-icons/gi";
import { GoMail } from "react-icons/go";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Intro.css"
function Intro() {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <div>
            <div className="profile_details">
                <p className="greet" data-aos="fade-right">Hey, Book Lovers!!</p>
                <p className="name" id="typewriter" data-aos="fade-right"><span className="name">{' '}
                    <Typewriter
                        words={['Explore', 'Buy', 'Read']}
                        loop={1}
                        cursor
                        cursorStyle='_'
                        cursorColor="aqua"
                        typeSpeed={60}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    /></span>
                </p>
                <p className="greet" data-aos="fade-right">and get lost in captivating stories! </p>
                <div className="main_buttons" data-aos="zoom-in">
                    <div className="button_cv">
                        <a href="#buy_books">Explore&nbsp;&nbsp;<GiArchiveResearch /></a>
                    </div>
                    <div className="button_cv2">
                        <Link to="/contact" className="contact"><GoMail />&nbsp;&nbsp;Contact</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Intro;