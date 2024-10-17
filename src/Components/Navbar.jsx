import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
function Navbar(){
    return(
        <>
            <div id="nav">
                    <Link to="/"><button className='btn'>Home</button></Link>
                    <select name="" id="">
                        <option value="">Category</option>
                        <option value="">Men's clothing</option>
                        <option value="">Women's clothing</option>
                        <option value="">Jewellery</option>
                        <option value="">Electronics</option>
                    </select>
                    <Link to="/login"><button className='btn'>Log in</button></Link>
                    <Link to="/reg"><button className='btn'>Register</button></Link>
                    <button id="btn1" className='btn'><span>Explore</span></button>
            </div>
        </>
    )
}
export default Navbar;
