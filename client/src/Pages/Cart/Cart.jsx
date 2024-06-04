import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card';
import { FaShoppingCart } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Cart.css"
import toast, { Toaster } from 'react-hot-toast';
export default function Cart() {
    useEffect(() => {
        AOS.init({
            duration: 800
        });
    }, []);
    const [cartBook, setCartBook] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/cart");
                const result = await res.json();
                toast.success("Book added to Cart Successfully!!")
                setCartBook(result);
            } catch (error) {
                toast.message("Book already added to Cart!!")
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])
    return (
        <div>

            <Navbar />
            <Toaster />
            <h1 className='addtoCart' data-aos="fade-down">Your Cart</h1>
            <div className='cart_cards' data-aos="fade-up">
                {Array.isArray(cartBook) && cartBook.map((data, index) => {
                    return <Card key={index} data={data} button={"Buy Now "} />
                })}
            </div>
            {cartBook.length === 0 &&
                <div className='emptyCart' data-aos="fade-right">
                    <p>You have not added any item to Your Cart.</p>
                    <a href='/'>Start to Shop &nbsp;<FaShoppingCart /></a>
                </div>
            }
        </div>
    )
}
