import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../index.css'
const Product=()=>{
    let location=useLocation();
    // console.log(location);
    
    let products=location.state.x;
    // console.log(products);
    function Cart(){
        let [count,setCount]=useState(0);
        return(
            <>
                <span><button className="bcart" onClick={()=>setCount(count+1)}>Add to cart<i className="fa-solid fa-cart-shopping"></i></button></span>
                <span><button className="bcart" onClick={()=>setCount(count-1)}>remove</button></span>
                <span>Items : {count}</span>
            </>
        )
    }
    return(
        <>
        <Navbar/>
            <div id="pi">
            <img className="card-image" src={products.image} alt="" />
            <div id="prod-cont">
            <h3 className="card-title">{products.title}</h3>
            <p className="card-description">{products.description}...</p>
            <p>{products.category}</p>
            <p>${products.price}</p>
            <span>Rating: {products.rating.rate} count: ({products.rating.count})</span>
            <Cart/>
            <button className="bcart">Buy now</button>
            </div>
            </div>
        <Footer/>
        </>
    )
}
export default Product