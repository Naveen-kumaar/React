import { useState } from "react";
import image from "./assets/redlandbaler.png"

const product = "Balers"
function Products(props){

    //const purchased = false;
    const [purchased, setPurchased] = useState(false);


    function Buycourse(discount){
        console.log(props.name,"this is youre product", discount,"%discount")
        setPurchased(true);
    }
         return(
        <div className="product">
            <img src={props.image} alt="Redlands Baler"/>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <button onClick={()=> Buycourse(20)}>Buy Now</button>
            <p>{purchased ? "already purchased":"get it now"}</p>
        </div>
    )
   Products.defaultProps={
    login:true
   }
}
export default Products