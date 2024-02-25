import React, {useState,useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar';

import AOS from 'aos';
import 'aos/dist/aos.css';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
    useEffect(()=>{
        AOS.init({
            duration:800
        });
        toast.error("Not functional for now!!")
    },[]);
    const [name, setName] = useState("");
    const [email, setMail] = useState("");
    const [subject, setSubject] = useState("");
    const [msg, setMsg] = useState("");
    const send= (e)=>{
        // e.preventDefault();
        // alert(`Hey ${name}! We have received your suggestion.\n\n Subject:${subject}\n Message:${msg}`);
        e.preventDefault();
        try{
            const config={
                Host : "smtp.elasticemail.com",
                Username : "vivekkr694@gmail.com",
                Password : "1A3F58F4591CE14F3B8093F7F2E8C6668F97",
                To : 'vivekkr694@gmail.com',
                From : `${email}`,
                Subject : `${subject}`,
                Body : `<br><br><h1 style="text-align:center; font-size:3rem;">${subject}</h1><p style="font-size:1.5rem">${msg}</p>  <br><br> <strong>Name:<\strong> ${name} <br> <strong>Email:<\strong> ${email}`
            }
            if (window.Email){
                window.Email.send(config)
                .then(
                    async message => {
                        if (message==="OK"){
                            toast.success("Message Sent Successfully!!!",{
                                style: {
                                    border:"1px solid white",
                                    borderRadius: '10px',
                                    background: '#20232F',
                                    color: '#fff',
                                    padding:"10px",
                                    fontSize:"1.1rem"
                                },
                            })
                        }
                        else{
                            toast.error("Unable to send Message!!!",{
                                style: {
                                    borderRadius: '10px',
                                    background: '#20232F',
                                    color: '#fff',
                                    border:"1px solid white",
                                    padding:"10px",
                                    fontSize:"1.1rem"
                                },
                            })
                        }
                    }
                ).then(async (res)=> {
                    setName("");
                    setMsg("");
                    setName("");
                    setSubject("");
                    setMail("");
                }
                )
            }
        }
        catch(error){
            alert('Error sending email');
        }
    }
  return (
    <div>
        <Navbar />
        <Toaster/>
        <div className="contact_form" style={{ padding:"20px"}} data-aos="zoom-in">
            <div className="getintouch">
                <h2>Get In Touch</h2>
            </div>
            <div className="details">
                <div className="message">
                    <div className="name_email">
                        <input className="inputcss" type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                        <input className="inputcss" type="email" placeholder="Email" value={email} onChange={(e)=> setMail(e.target.value)} required />
                    </div>
                    <div className="others">
                        <input  className="inputcss" type="text" placeholder="Subject" value={subject} onChange={(e)=> setSubject(e.target.value)} />
                        <textarea className="textareacss" type="text" rows={4} placeholder="Message..." value={msg} onChange={(e)=> setMsg(e.target.value)} required></textarea>
                        <button type="submit" onClick={send}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
