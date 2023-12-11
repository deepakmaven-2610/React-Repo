import { Link } from "react-router-dom";

const PRODUCTS =[
    {id: 'p1', title:'product1'},
    {id: 'p2', title:'product2'},
]
function ProductPage()
{
    return(
        <>
         <h1>My Product Page </h1>
         <ul>
           {PRODUCTS.map((prod) => (
            <li key={prod.id}>
                <Link to={`/products/${prod.id}`}>{prod.title}</Link>
            </li>
           ))}
         </ul>
        </>

    )
}

export default ProductPage;