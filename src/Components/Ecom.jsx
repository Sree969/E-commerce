import React, {Component, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../index.css"
let Ecom=()=>{
    let navigate=useNavigate();

    let [api,setApi]=useState({products:[]});
    let [search,setSearch]=useState("")
    let [count, setCount]=useState(0);
    useEffect(()=>{
        let api=fetch("https://fakestoreapi.com/products");
        api.then(res=>res.json()).then(val=>{
            setApi({products:val});
        }).catch(e=>console.log(e));
    },[])
    // console.log(api);
    
    let prodSearch=(e)=>{
        setSearch(e.target.value);
    }
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
        <div id="maindiv">
            <div id="divpart1">
                <h1 id="head1">Trendy Finds</h1>
                <input id="ip1" type="text" placeholder="Search product" onChange={prodSearch} />
            </div>
            <div id="divpart2">
                {api.products.filter(x=>x.title.toLowerCase().includes(search)).map(x=>{
                    // console.log(x);
                    
                    return(
                        <div className="card" key={x.id}>
                            <img className="card-image" style={{width:"250px", height:"250px"}} src={x.image} alt={x.title} />
                            <div className="card-content">
                                <h3 className="card-title">{x.title}</h3>
                                <p className="card-description">{x.description.slice(0,25)}...</p>
                                <p>{x.category}</p>
                                <p>${x.price}</p>
                                <span>Rating: {x.rating.rate} count: ({x.rating.count})</span>
                                {/* <Cart/> */}
                                <button className="bcart" onClick={()=>navigate("/product",{state:{x}})}>Add to cart<i className="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default Ecom;






































//     componentDidMount(){
//         let a=fetch(this.state.api);
//             a.then(res=>res.json()).then(val=>{
//                 console.log(val);
//                 this.setState({arr:val,img:val.image,title:val.title})
//             })
//     }
//     imgsearch=()=>{

//     }
//     render(){
//         console.log(this.state.arr);
//         let b=this.state.arr;
//         return(
//            <>
//             <input type="text" placeholder="Search products" />
//             <button onChange={search}>Submit</button>
//            </>
//         )
//     }
// }