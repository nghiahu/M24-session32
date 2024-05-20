import React, { useState } from 'react'

export default function Bt3() {
    const [date, setDate] = useState<string>("");

    const handleClick = () => {
        const dateInp = document.getElementById('dateInp') as HTMLInputElement;
        setDate(dateInp.value);
    }
  return (
    <div style={{paddingTop:30}}>Bài tập 3
        <div>
                <p>Ngày sinh : {date}</p>
                <input id="dateInp" type="date" /><br />
                <button onClick={handleClick}>Submit</button>
        </div>
    </div>
  )
}
