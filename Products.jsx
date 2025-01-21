import React, { useState } from 'react'

function Products({age, data}) {
    const[a,b]= useState(false);
  return (
    <div className="h-96 w-full mt-5 bg-zinc-800 text-white">
        PRODUCTS
        <h1>{age}</h1>
        <h2>{data.age}</h2>
        <h2>{data.name}</h2>
        <h4 className={ `${a=== false ? "text-red-600 text-2xl" : "text-blue-600 text-2xl"}`}>{a === false ? "hello" : "namaste"}</h4>
        <button onClick={() =>b(!a)}className="px-3 py-1 bg-blue-500 rounded-md text-s">change</button>
    </div>
  )
}

export default Products