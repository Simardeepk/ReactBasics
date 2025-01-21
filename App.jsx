import React, { useState } from 'react'
import Products from './Products';

function App() {
  var[a,b]= useState(69);
  return (
    <div className="w-full h-screen bg-zinc-700 p-4">
      <div className="w-44 h-32 rounded-xl bg-red-600 p-3 text-white">
        <h1>hiii what's up champ</h1>
        <h1>{a}</h1>
        <button onClick = {()=>b(a+1)} className="px-3 py-1 bg-blue-500 rounded-md text-s">click</button>
      </div>
      <Products age="20" data={{age: 25, name: "anu"}} />
    </div>
    
  );
}

export default App