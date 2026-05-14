import Products from './products.jsx'
import image from "./assets/redlandbaler.png"
import image2 from "./assets/RedlandDiscrotavator.png"
import image3 from "./assets/RedlandRotavator.png"
function Productlist() {
    const products =[
    {
        name:"Balers",
        image:image,
        discription:"a type of agricultural machinery"
    },
    {
        name:"DiscRotavator",
        image:image2,
        discription:"a type of agricultural machinery",
    },
    {
        name:"Rotavator",
        image:image3,
        discription:"a type of agricultural machinery"
    },
    {
        name:"Rotavator",
        image:image3,
        discription:"a type of agricultural machinery"
    }
]
const productslist = products.map((product,index)=>
    <Products  
        key={index}
        name={product.name}
        image={product.image}
        description={product.discription}
    />
)

    

    return(
        <>{productslist}</>
    )
}
export default Productlist