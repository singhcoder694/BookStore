import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar';

import AOS from 'aos';
import 'aos/dist/aos.css';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

function Update() {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state.data;
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    const [title, setName] = useState(data.title);
    const [Author, setAuthor] = useState(data.Author);
    const [Image, setImg] = useState(data.Image);
    const [ISBN, setISBN] = useState(data.ISBN);
    const [Price, setPrice] = useState(data.Price);
    const [Description, setDescription] = useState(data.Description);
    const updateBookDetail = () => {
        const fetchData = async () => {
            const result = await toast.promise(
                fetch(import.meta.env.VITE_BACKEND_URL + "/update/:id", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ title, Author, ISBN, Price, Image, Description })
                }).then(res => res.json()),
                {
                    loading: 'Updating Book Details....',
                    success: 'Book Updated successfully!',
                    error: 'Failed to update book.',
                    position: 'top-right'
                }
            );
            if (result.status === 200) {
                navigate("/", { replace: true });
            }
        }
        fetchData();
    }
    return (
        <div style={{ backgroundColor: "#242424" }}>
            <Navbar />
            <Toaster position='top-right' />
            <div className="contact_form" style={{ padding: "20px" }} data-aos="zoom-in">
                <div className="getintouch">
                    <h2>Update Book</h2>
                </div>
                <div className="details">
                    <div className="message">
                        <div className="name_email">
                            <input className="inputcss" type="text" placeholder="Book Name" value={title} onChange={(e) => setName(e.target.value)} required />
                            <input className="inputcss" type="text" placeholder="Author Name" value={Author} onChange={(e) => setAuthor(e.target.value)} required />
                        </div>
                        <div className="others">
                            <input className="inputcss" type="text" placeholder="Image URL" value={Image} onChange={(e) => setImg(e.target.value)} />
                            <input className="inputcss" type="text" placeholder="ISBN" value={ISBN} onChange={(e) => setISBN(e.target.value)} />
                            <input className="inputcss" type="number" placeholder="Price" value={Price} onChange={(e) => setPrice(e.target.value)} required></input>
                            <textarea className="textareacss" type="number" rows={4} placeholder="Description(optional)" value={Description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                            <button type="submit" onClick={updateBookDetail}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Update
