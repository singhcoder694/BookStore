import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Create.css"
import toast, { Toaster } from 'react-hot-toast';

function Create() {
    useEffect(() => {
        AOS.init({
            duration: 800
        });
    }, []);
    const [title, setTitle] = useState("");
    const [Author, setAuthor] = useState("");
    const [Image, setImage] = useState("");
    const [ISBN, setISBN] = useState("");
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");
    const handleSubmit = async (e) => {
        if (title==="" || Author === "" || Image==="" || ISBN==="" || Price==="" || Description===""){
            toast.error("Fill all the required fields")
        }
        const result = await toast.promise(
            fetch("http://localhost:3000/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({title, Author, ISBN, Price, Image,  Description})
            }).then(res => res.json()),
            {
                loading: 'Creating book...',
                success: 'Book created successfully!',
                error: 'Failed to create book.',
                position: 'top-right'
            }
        );
        if (result.status === 201) {
            setAuthor('');
            setTitle('');
            setISBN('');
            setDescription('');
            setImage('');
            setPrice('');
        }
        else {
            console.log(result.message)
        }
    }
    return (
        <div style={{ backgroundColor: "#242424" }}>
            <Navbar />
            <Toaster position='top-right' />
            <div className="contact_form" style={{ padding: "20px" }} data-aos="zoom-out">
                <div className="getintouch">
                    <h2>Add New Book</h2>
                </div>
                <div className="details">
                    <div className="message">
                        <div className="name_email">
                            <input className="inputcss" type="text" placeholder="Book Name(required)" value={title} onChange={(e) => setTitle(e.target.value)} required />
                            <input className="inputcss" type="text" placeholder="Author Name(required)" value={Author} onChange={(e) => setAuthor(e.target.value)} required />
                        </div>
                        <div className="others">
                            <input className="inputcss" type="text" placeholder="Image URL(optional)" value={Image} onChange={(e) => setImage(e.target.value)} />
                            <input className="inputcss" type="text" placeholder="ISBN(required)" value={ISBN} onChange={(e) => setISBN(e.target.value)} required/>
                            <input className="inputcss" type="number" placeholder="Price(required)" value={Price} onChange={(e) => setPrice(e.target.value)} required></input>
                            <textarea className="textareacss" type="number" rows={4} placeholder="Description(optional)" value={Description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                            <button type="submit" onClick={handleSubmit}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create
