import React from 'react'

function Card({img, title, price}) {
  return (
    <div style={{ border: "1px solid red",
    borderRadius: "100px", 
    //padding: "20px", 
    width: "250px",
    height: "450px",
    textAlign: "center"}}>
    {/* <h1>FOOD DELIVERY</h1>
    <p>FROM RESTAURANTS</p>
    <h5>UPTO 60%</h5> */}
    <img style={{height:"200px"}} src={img} alt={title}/>
    <h1>{title}</h1>
    <h2>{price}</h2>
    {/* //<button>Click me</button> */}
    </div>
  )
}

export default Card