import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import "./Books.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import toast, { Toaster } from 'react-hot-toast';
export default function Books() {
    const [search, setSearch] = useState("");
    const [bookData, setBookdata] = useState([]);
    useEffect(() => {
        AOS.init({
            duration: 800
        });
    }, []);
    console.log(import.meta.env.VITE_BACKEND_URL)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await toast.promise(
                    fetch(import.meta.env.VITE_BACKEND_URL).then(res => res.json()),
                    {
                        loading: 'Fetching books...',
                        success: 'Books loaded successfully!',
                        error: 'Failed to load books.',
                    }
                );
                setBookdata(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Toaster />
            <div className='search_bar' data-aos="zoom-in">
                <input type="text" placeholder="Enter Name of Book..." value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <div className='book_cards' id="buy_books">
                {Array.isArray(bookData) && bookData.filter((item) => {
                    return (item.title.toLowerCase() === "" ? item : item.title.toLowerCase().includes(search.toLowerCase()))
                }).map((data, index) => {
                    return <Card key={index} data={data} button={"Add to Cart"} />
                })}
            </div>
        </>
    )
}
