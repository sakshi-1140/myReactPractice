import React from 'react'

function showroom() {
    const brand=["BMW","TATA","Honda","Mercendez"];
  return (
    <div>
        <h1>Car showroom</h1>
        <ol>
            {
                brand.map((item)=>{
                    return <li>{item}</li>
                })
            }
        </ol>
    </div>
  )
}

export default showroom