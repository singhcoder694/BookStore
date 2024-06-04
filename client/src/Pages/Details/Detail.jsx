import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useLocation, useNavigate } from 'react-router-dom';
import "./Detail.css"
import toast, { Toaster } from 'react-hot-toast';
export default function Detail() {
    const location = useLocation();
    const data = location.state.data;
    const navigate = useNavigate();
    const navigateToDetails = () => {
        navigate('/update', { state: { data: data } });
    };
    const confirmDelete = () => {
        return new Promise((resolve, reject) => {
            const result = window.confirm("Are you sure you want to delete this book?");
            if (result) {
                resolve();
            } else {
                reject();
            }
        });
    };
    const deleteProduct = () => {
        const delBook = async () => {
            await confirmDelete();
            const result = await toast.promise(
                fetch("process.env.REACT_APP_BACKEND_URL/delete/:id", {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ISBN: data.ISBN })
                }).then(res => res.json()),
                {
                    loading: 'Deleting the book...',
                    success: 'Book has been deleted successfully!',
                    error: 'Failed to delete book.',
                }
            );
            if (result.status === 200) {
                navigate("/", { replace: true });
            }
        }
        delBook();
    }
    const handleAddToCart = async () => {
        try {
            const response = await fetch(`process.env.REACT_APP_BACKEND_URL/addtoCart/:id`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(location.state.data)
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
    return (
        <>
            <Navbar />
            <Toaster />
            <div className='details_page'>
                <div className='detail_book_image'>
                    <img src={data.Image} alt="book_image" />
                    <div className='detail_buttons'>
                        <button className='detail_update' onClick={navigateToDetails}>Update</button>
                        <button className='detail_add' onClick={handleAddToCart}>Add to Cart</button>
                        <button className='detail_delete' onClick={deleteProduct}>Delete</button>
                    </div>
                </div>
                <div className='book_details'>
                    <div className='sub_details'>
                        <p className='detail_head'>Book Name</p>
                        <p className='detail_detail'>{data.title}</p>
                    </div>
                    <div className='sub_details'>
                        <p className='detail_head'>Author Name</p>
                        <p className='detail_detail'>{data.Author}</p>
                    </div>
                    <div className='sub_details'>
                        <p className='detail_head'>Price</p>
                        <p className='detail_detail'>$ {data.Price}</p>
                    </div>
                    <div className='sub_details'>
                        <p className='detail_head'>ISBN</p>
                        <p className='detail_detail'>{data.ISBN}</p>
                    </div>
                    <div className='sub_details'>
                        <p className='detail_head'>Description</p>
                        <p className='detail_detail'>{data.Description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
