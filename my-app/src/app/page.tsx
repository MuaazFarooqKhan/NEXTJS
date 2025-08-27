"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState('Muaaz');
  const [outer, setOuter] = useState(0);
  let nameMe= 'Texting Me'
  const clickMe=()=>{
    nameMe="Don't Texting Me"
    setName("Muaaz Farooq Khan")
  }
  const NewComponent= ()=> {
    debugger
    const [name, setName] = useState('Muaaz');
    const clickMe=()=>{
      nameMe="Don't Texting Me"
      setName("Muaaz Farooq Khan")
    }
    return(
      <>
            <h1>This is inner Component</h1>
            <h1>Hello World {name}</h1>
      <h2>{nameMe}</h2>
      <button onClick={()=> clickMe()}>Click me to change the messages of the inner component</button>
            </>
      
    )
  }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Hello World {name}</h1>
      <h2>{nameMe}</h2>
      <button onClick={() => setOuter(outer + 1)}>Increment Outer</button>
      <button onClick={()=> clickMe()}>Click me to change the message</button>
      {/* React component instance (with state, lifecycle, hooks, reconciliation). */}
      {/* The correct way to render a React component.
          React treats it as a component, not just a function.
          It creates its own lifecycle, props, state, hooks, etc. */}
      {/* <NewComponent/>
      NewComponent() */}
      <h2>❌ Function Call (will break)</h2>
      {outer % 2 === 0 && NewComponent()}
      <h2>❌ Function Call (will not break)</h2>

      {outer % 2 === 0 && <NewComponent/>}

      {/* plain function call, React doesn’t treat it as a component. */}
      {/* React will insert the returned JSX into the parent.
          But again:
          No state management
          No lifecycle
          No hooks allowed */}
      {/* {NewComponent()} */}
    </div>
  );
}
