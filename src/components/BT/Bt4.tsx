import React, { useState } from 'react'

export default function Bt4() {
    const [range, setRange] = useState<string>("");

    const handleClick = () => {
        const rangeInp = document.getElementById('rangeInp') as HTMLInputElement;
        setRange(rangeInp.value);
    }
  return (
    <div style={{paddingTop:30}}>Bài tập 4
        <div>
            <p>Tiến độ hoàn thành : {range}%</p>
            <input id="rangeInp" type="range" /><br />
            <button onClick={handleClick}>Submit</button>
        </div>
    </div>
  )
}
