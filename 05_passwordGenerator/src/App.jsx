import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState("false")
  const [charAllowed, setCharAllowed] = useState("false")
  const [password, setPassword] = useState("")

  // uuseRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+~`"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password)
  },[password])

  // Method is running from here
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h2 className="text-white text-center my-3 text-3xl mb-6">Password Generator</h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
                type="text" 
                value={password} 
                className="outline-none w-full py-1 px-3 bg-white"
                placeholder="password" 
                readOnly
                ref={passwordRef}
          />

          <button onClick={copyPasswordToClipboard} className="cursor-pointer boutline-none bg-blue-700 text-white px-3 py-0.5 shrink-0ack">copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)} }
              />
              <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            // className='cursor-pointer'
            onChange={() => {setNumberAllowed((prev) => !prev)} }
              />
              <label>Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            className='cursor-pointer'
            onChange={() => {setCharAllowed((prev) => !prev)} }
              />
              <label>Character</label>
          </div>


        </div>
      </div> 
    </>
  );
}

export default App;
