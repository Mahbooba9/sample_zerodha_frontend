import {useState,useEffect} from 'react'
import Card from './Card'
// useState is a hook that allows you to add state to a functional component. It returns an array with two elements: the current state and a function that updates the state. You can use it like this:
function Products() {
    const [products, setproducts] = useState([])


    useEffect(()=>{ 
      fetch("http://localhost:5000/products")
    .then(res=>res.json())
    .then(p=>setproducts(p))

    }, [])

  return (
    <>
      <div style={{display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-around"}}>
      { products.map((p)=>{return <Card img={p.image} title={p.title} price={p.price}/>})}
      </div>
    </>
    )
}

export default Products