import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import books_list from "./book_list.js";
import cart from "./cart.js";
import cors from 'cors';
// import { dirname } from "path";
// import { fileURLToPath } from "url";
config();
// const __dirname = dirname(fileURLToPath(import.meta.url)); //It is use to give the system path __dirname contains C://users.... so on.

const app = express(); //It is common to make app const.
const port = process.env.PORT || 3000; //It is common practice too.

app.use(bodyParser.urlencoded({ extended: true })); //This is use mostly for form as they are urlencoded. use method is to mount the middleware
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => { // get method
  res.json(books_list);
});
app.post("/addtoCart/:id", (req, res) => {
  let item = req.body;
  const itemExists = cart.some(cartItem => cartItem.id === item.id);
  if (itemExists) {
    res.json({ message: "Item already in cart", status: 200 });
  }
  else {
    cart.push(item);
    res.json({ status: 200 });
  }
});
app.get("/cart", (req,res)=>{
  res.json(cart);
})
app.post("/create", (req,res)=>{
  const itemExists= books_list.some(book=> book.ISBN===req.body.ISBN);
  if (itemExists){
    res.json({status:409,message:"Book Already Exists!!"});
  }else{
    books_list.push(req.body);
    books_list[books_list.length-1].id=books_list.length+1;
    res.json({status:201,message:"Your book is Added Successfully !"});
  }
})
app.put("/update/:id", (req,res)=>{
  let ind=books_list.findIndex(item => item.ISBN === req.body.ISBN);
  books_list[ind]={...books_list[ind], ...req.body};
  res.json({status: 200, message: "Book Details has been updated Successfully!"})
})
app.delete("/delete/:id", (req,res)=>{
  let ind=books_list.findIndex(item => item.ISBN === req.body.ISBN);
  books_list.splice(ind,1);
  console.log(books_list);
  res.json({status:200, message: "Book has been deleted Successfully!"});
})
app.listen(port, () => { //listen on port specified console.log is to check it is working (not mandatory).
  console.log(`Listening on port ${process.env.PORT}`);
});