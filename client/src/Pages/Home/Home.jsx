import React, { useEffect, useState } from "react"
import Navbar from "../../Components/Navbar/Navbar"
import Banner from "../../Components/Banner/Banner"
import Intro from "../../Components/Intro/Intro"
import "./Home.css"
import Books from "../Books/Books"
function Home() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[]);
    return (
        <div>
            <Navbar />
            <div className="profile_section">
                <Intro />
                {width >= 970 ? <Banner /> : ""}
            </div>
            <Books />
        </div>

    )
}
export default Home;