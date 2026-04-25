import image from "./assets/redlandbaler.png"

const product = "Balers"
function Products(props){
    return(
        <div className="product">
            <img src={props.image} alt="Redlands Baler"/>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
}
export default Products