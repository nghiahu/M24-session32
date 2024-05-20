import React, { useState } from 'react'
export default function Bt1() {
    const [email,setEmail] = useState<string>("")
const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
}
const handleClick=()=>{
    console.log({email})
}
  return (
    <div>Bài tập 1
      <h2>From</h2>
          <div>
              <label htmlFor="">Email</label> <br />
              <input type="email" onChange={handleChange}/>
              <button onClick={handleClick}>Submit</button>
          </div>
    </div>
  )
}

