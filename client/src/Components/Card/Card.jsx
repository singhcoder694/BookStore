import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import "./Card.css"
import toast, { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Card(props) {
    useEffect(() => {
        AOS.init({
            duration: 800
        });
    }, []);
    const navigate = useNavigate();
    const navigateToDetails = () => {
        navigate('/details', { state: { data: props.data } });
    };
    const handleAddToCart = async () => {
        try {
            const response = await fetch(`process.env.REACT_APP_BACKEND_URL/addtoCart/:id`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(props.data)
            });
            const result = await response.json();
            if (result.message === "Item already in cart") {
                toast("Book Already Added to Cart !!")
            }
            else if (result.status === 200) {
                toast.success("Book Added to Cart Successfully!!")
            } else {
                toast.error('Failed to add item to cart');
            }
        } catch (error) {
            console.error('Error adding item to cart:', error);
            // alert('Error adding item to cart. Please try again later.');
        }
    };
    const handleBuyNow = () => {
        alert("This service is not available as of Now")
    }
    return (
        <>
            <Toaster />
            <div className='card_container' data-aos="fade-up">
                <div className='book_image'>
                    <img src={props.data.Image}></img>
                </div>
                <div className='book_detail'>
                    <p className='book_name'>{props.data.title}</p>
                    <p className='book_price'>$ {props.data.Price}</p>
                    <div className='option_buttons'>
                        <button className='detail_button' onClick={navigateToDetails}>Details</button>
                        <button className='add_to_cart' onClick={props.button === "Add to Cart" ? handleAddToCart : handleBuyNow}>{props.button === "Add to Cart" ? <FaShoppingCart /> : null}{props.button}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
